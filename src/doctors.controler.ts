import { Controller, Get } from '@nestjs/common'

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
    findAll(){
        return this.listOfDoctors
    }
}