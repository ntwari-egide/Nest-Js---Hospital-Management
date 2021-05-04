import { Injectable } from "@nestjs/common";
import Doctor from "./doctor.interface";

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    private listOfDoctors : Doctor[]

    constructor(){
        this.listOfDoctors = [{name: 'ntwari',role: 'doctor',clinic: 'benz clinic'}]
    }

    getAllDoctors(): Doctor[] {
        return this.listOfDoctors
    }

    createDoctor(doctor : Doctor){
        return this.listOfDoctors.push()
    }

}