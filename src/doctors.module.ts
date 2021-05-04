import { DoctorsService } from './doctors.service';
import { Global, Module } from '@nestjs/common';
import DoctorsController from './doctors.controller';

@Global()
@Module({
    controllers: [DoctorsController],
    providers: [DoctorsService],
    exports: [DoctorsService]
})

export class DoctorsModule{
    constructor(private doctorService:DoctorsService){}
}