import { DoctorsService } from './doctors.service';
import { Controller, Get, Req } from '@nestjs/common'
import {Request} from 'express'
import Doctor from './doctor.interface'

@Controller('/doctors')
export default class DoctorsController{
    listOfDoctors : object[]

    constructor(private doctorService: DoctorsService){
        this.listOfDoctors =[
            {
                name: "ntwari egide",
                role: "doctor",
                clinic: "gahunga santre de cante"
            },
            {
                name: "mugisha jules",
                role: "phd-doctor",
                clinic: "gahunga santre de cante"
            }
        ]
    }

    @Get()
    async findAll(): Promise<Doctor[]>{        
        return this.doctorService.getAllDoctors()
        // return "This is my content "+receivedRequest
    }

}