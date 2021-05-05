import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
// import Doctor from "./doctor.interface";
import { Doctor, DoctorDocument } from "./doctor.schema";

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    // private listOfDoctors : Doctor[]

    constructor(
        @InjectModel(Doctor.name) 
        private doctorModel: Model<DoctorDocument>
    ){
        // this.listOfDoctors = [{name: 'ntwari',role: 'doctor',clinic: 'benz clinic'}]

        
    }

    async getAllDoctors(): Promise<Doctor[]> {
        // return this.listOfDoctors
        return this.doctorModel.find().exec();
    }

    async createDoctor(doctor : Doctor): Promise<Doctor>{
        // return this.listOfDoctors.push()
        const createdDoctor =  new this.doctorModel(doctor);
        return createdDoctor.save()
    }

}