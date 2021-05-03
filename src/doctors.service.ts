import { Injectable } from "@nestjs/common";
import Doctor from "./doctor.interface";

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    private listOfDoctors : Doctor[]

    getAllDoctors() {

    }

}