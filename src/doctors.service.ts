import { Injectable } from "@nestjs/common";
import Doctor from "./doctor.interface";

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    private listOfDoctors : Doctor[]

    getAllDoctors(): Doctor[] {
        return this.listOfDoctors
    }

    createDoctor(doctor : Doctor){
        return this.listOfDoctors.push()
    }

}