import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

export type DoctorDocument = Doctor & Document

@Schema()
export class Doctor{
    @Prop()

    name: string

    @Prop()

    role: string

    @Prop()

    clinic: string
}

export const DoctorSchema = SchemaFactory.createForClass(Doctor)