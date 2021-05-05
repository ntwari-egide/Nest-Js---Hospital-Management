// import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
// import { Document } from "mongoose";

// export type DoctorDocument = Doctor & Document

// @Schema()
// export class Doctor{
//     @Prop({required: true})

//     name: string

//     @Prop()

//     role: string

//     @Prop()

//     clinic: string
// }

// export const DoctorSchema = SchemaFactory.createForClass(Doctor)

import * as mongoose from 'mongoose';

export const DoctorSchema = new mongoose.Schema({
  name: String,
  role: String,
  clinic: String,
});