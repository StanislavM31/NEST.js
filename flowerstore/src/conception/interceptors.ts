import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common'
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators'

@Injectable()
export class LoggingInteceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> | Promise<Observable<any>> {
        console.log('Before');
        return next.handle().pipe(tap(() => console.log('After...')));
    }
}