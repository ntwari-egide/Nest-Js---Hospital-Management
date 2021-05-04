import { DoctorsService } from './doctors.service';
import { Module } from '@nestjs/common';
import DoctorsController from './doctors.controller';

@Module({
    controllers: [DoctorsController],
    providers: [DoctorsService],
    exports: [DoctorsService]
})

export class DoctorsModule{
    constructor(private doctorService:DoctorsService){}
}