import { Controller, Get } from '@nestjs/common'

@Controller('/doctors')
export default class DoctorsController{
    @Get()
    findAll(){
        return [{
            name: "ntwari egide",
            role: "doctor",
            clinic: "gahunga santre de cante"
        }]
    }
}