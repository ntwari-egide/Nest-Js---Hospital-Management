import { ArgumentsHost, Catch, ExceptionFilter } from "@nestjs/common";

@Catch(HttpException)
export class HttpExceptionFilter  implements ExceptionFilter{
    catch(exception: HttpException,host: ArgumentsHost){
        const ctx = host.switchToHttp()
        const response = ctx.getResponse<Response>()
    }
}