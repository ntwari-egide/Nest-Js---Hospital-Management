import { LoggerDoctorMiddleware } from './doctors.middleware';
import { DoctorsService } from './doctors.service';
import { Global, Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import DoctorsController from './doctors.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Doctor, DoctorSchema } from './doctor.schema';

@Global()
@Module({
    imports: [MongooseModule.forFeature([{name: Doctor.name,schema: DoctorSchema}],'doctors')],
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
        // .forRoutes({path: 'doctors',method: RequestMethod.GET})
        // .forRoutes({path: 'do*tors',method: RequestMethod.ALL})
        /* Excluding some routes */
        .exclude(
            {path: 'doctors',method: RequestMethod.POST},
            {path: 'doctors',method: RequestMethod.DELETE}
        )
        .forRoutes(DoctorsController)
    }

    constructor(private doctorService:DoctorsService){}
}