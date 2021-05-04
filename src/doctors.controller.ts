import { DoctorNotFoundException } from './doctors.exception';
import { DoctorsService } from './doctors.service';
import { Body, Controller, Get, HttpException, HttpStatus, Post } from '@nestjs/common'
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

    @Get('/protected')
    async findProtected(){
        // throw new HttpException('Unauthorized access',HttpStatus.FORBIDDEN)
        throw new HttpException({
            status: HttpStatus.FORBIDDEN,
            error: 'This is protected, Login first'
        },HttpStatus.FORBIDDEN)
    }

    @Get("/customized")
    async findCustomized(){
        throw new DoctorNotFoundException('Doctor with id: 1 is not found')
    }

    @Post()
    async addDoctor(@Body() doctor: Doctor){
        this.doctorService.createDoctor({name: 'new doctor',role: 'doctor',clinic: 'any clinic'})
    }
}