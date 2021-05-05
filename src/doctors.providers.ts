import { DoctorSchema } from './doctor.schema';
import { Connection } from 'mongoose';

export const doctorsProvider = [
  {
    provide: 'DOCTOR',
    useFactory: (connection: Connection) => connection.model('Cat', DoctorSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];