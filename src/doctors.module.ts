import { LoggerDoctorMiddleware } from './doctors.middleware';
import { DoctorsService } from './doctors.service';
import { Global, Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
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
        .forRoutes('doctors')
    }
    
    constructor(private doctorService:DoctorsService){}
}