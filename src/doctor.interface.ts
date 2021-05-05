import { Document } from 'mongoose';
export default interface DoctorInput extends Document{
    name: string,
    role: string,
    clinic: string
}