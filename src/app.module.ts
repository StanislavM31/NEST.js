import { Module } from "@nestjs/common";
import { FlowersModule } from "./flowers/flowers.module";
import { ConfigModule } from "@nestjs/config";
import { MicroserviceModule } from "./microservice/microservice.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ClientsModule, Transport } from "@nestjs/microservices";
import { WebsocketGateway } from "./websocket.gateaway";

@Module({
  imports: [
    FlowersModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    FlowersModule,
    MicroserviceModule,
    ClientsModule.register([
      {
        name: 'OREDER_SERVICE',
        transport: Transport.TCP,
        options:{
          host: 'localhost',
          port: 8877,
        },
      }
    ])
  ],
  controllers: [AppController],
  providers: [AppService, WebsocketGateway],
})
export class AppModule {}
