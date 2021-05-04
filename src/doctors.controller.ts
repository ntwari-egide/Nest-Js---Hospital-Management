import { DoctorsService } from './doctors.service';
import { Body, Controller, Get, Post } from '@nestjs/common'
import Doctor from './doctor.interface'

@Controller('/doctors')
export default class DoctorsController{
    listOfDoctors : object[]

    constructor(private doctorService: DoctorsService){
    }

    @Get()
    async findAll(): Promise<Doctor[]>{        
        return this.doctorService.getAllDoctors()
        // return "This is my content "+receivedRequest
    }

    @Post()
    async addDoctor(@Body() doctor: Doctor){
        this.doctorService.createDoctor({name: 'new doctor',role: 'doctor',clinic: 'any clinic'})
    }
}