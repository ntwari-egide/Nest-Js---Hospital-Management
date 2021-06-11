import { Injectable, Inject } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import DoctorInput from './doctor.interface'

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    // private listOfDoctors : Doctor[]

    constructor(
        @Inject('DOCTOR')
        private doctorModel: Model<DoctorInput>,
      ) {}

    async getAllDoctors(): Promise<DoctorInput[]> {
        // return this.listOfDoctors
        return this.doctorModel.find().exec();
    }

    async createDoctor(doctor : DoctorInput): Promise<DoctorInput>{
        // return this.listOfDoctors.push()
        const createdDoctor =  new this.doctorModel(doctor);
        return createdDoctor.save()
    }

    async getDoctorById(id:Number): Promise<DoctorInput>{
        return  this.doctorModel.findOne(id).exec()
    }

}