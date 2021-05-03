import { Controller, Get, Req } from '@nestjs/common'
import {Request} from 'express'

@Controller('/doctors')
export default class DoctorsController{
    listOfDoctors : object[]

    constructor(){
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
    findAll(@Req() receivedRequest : Request){
        console.log("This is my content: ",receivedRequest);
        
        return this.listOfDoctors
        // return "This is my content "+receivedRequest
    }

}