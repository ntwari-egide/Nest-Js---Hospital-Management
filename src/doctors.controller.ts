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


@Controller('/doctors')
@UseGuards(new RolesGuard())
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

    @Post()
    // @UsePipes(new JoiValidationPipe(Doctor))
    async addDoctor(
        @Body(new ValidationPipe()) createDoctor: CreateDoctorDto
        
        ){
        this.doctorService.createDoctor(createDoctor)
    }
}