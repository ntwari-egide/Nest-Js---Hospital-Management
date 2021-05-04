import { LoggerDoctorMiddleware } from './doctors.middleware';
import { DoctorsService } from './doctors.service';
import { Global, Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import DoctorsController from './doctors.controller';

@Global()
@Module({
    controllers: [DoctorsController],
    providers: [DoctorsService],
    exports: [DoctorsService]
})

export class DoctorsModule implements NestModule{
    configure(consumer: MiddlewareConsumer){
        consumer
        .apply(LoggerDoctorMiddleware)
        // .forRoutes('doctors')
        /* restricting the middleware to some routes */
        .forRoutes({path: 'doctors',method: RequestMethod.GET})
    }

    constructor(private doctorService:DoctorsService){}
}