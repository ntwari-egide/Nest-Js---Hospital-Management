import { HttpExceptionFilter } from './http-request.filter';
import { DoctorNotFoundException } from './doctors.exception';
import { DoctorsService } from './doctors.service';
import DoctorInput from './doctor.interface'
import { Body, Controller, Get, HttpException, HttpStatus, ParseIntPipe, Post, UseFilters, UseGuards } from '@nestjs/common'
import { Param } from '@nestjs/common';
import { UsePipes } from '@nestjs/common';
import { JoiValidationPipe } from './validation.pipe';
import { ValidationPipe } from '@nestjs/common';
import { CreateDoctorDto } from './dto/createdoctor.dto';
import { RolesGuard } from './guards/role.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { UseInterceptors } from '@nestjs/common';
import { Doctor } from './decorators/doctor.decorator';


@Controller('/doctors')
@UseGuards(new RolesGuard())
@UseInterceptors(new LoggingInterceptor())
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

    /**
     * Nest js pipes : parseIntPipe
     * @param id 
     * @returns 
     */

    @Get("/:id")
    async getDoctorById(@Param("id", new ParseIntPipe({ errorHttpStatusCode: HttpStatus.NOT_ACCEPTABLE })) id:Number){
        return   this.doctorService.getDoctorById(id);
    }

    /**
     * Usage of custom decorators
     */
    @Get()
    async findOne(@Doctor() doctor: CreateDoctorDto){
        console.log("Custom decorators returning : ",doctor);
    }


    @Post()
    // @UsePipes(new JoiValidationPipe(Doctor))
    async addDoctor(
        @Body(new ValidationPipe()) createDoctor: CreateDoctorDto
        
        ){
        this.doctorService.createDoctor(createDoctor)
    }
}