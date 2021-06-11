import { HttpExceptionFilter } from './http-request.filter';
import { DoctorNotFoundException } from './doctors.exception';
import { DoctorsService } from './doctors.service';
import DoctorInput from './doctor.interface'
import { Body, Controller, Get, HttpException, HttpStatus, ParseIntPipe, Post, UseFilters } from '@nestjs/common'
import { Param } from '@nestjs/common';


@Controller('/doctors')
export default class DoctorsController{
    listOfDoctors : object[]

    constructor(private doctorService: DoctorsService){
    }

    @Get()
    async findAll(): Promise<DoctorInput[]>{        
        return this.doctorService.getAllDoctors()
        // return "This is my content "+receivedRequest
    }

    @Get('/protected')
    @UseFilters(new HttpExceptionFilter())
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

    @Get("/:id")
    async getDoctorById(@Param("id", ParseIntPipe) id:Number){
        this.doctorService.
    }

    @Post()
    async addDoctor(@Body() doctor: DoctorInput){
        this.doctorService.createDoctor(doctor)
    }
}