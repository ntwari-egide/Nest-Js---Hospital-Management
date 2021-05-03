import { Injectable } from "@nestjs/common";

// services manage data retrieval and storage logics
@Injectable()
export class DoctorsService{
    listOfDoctors : [
        {
            name: "ntwari egide",
            role: "doctor",
            clinic: "gahunga santre de cante"
        },
        {
            name: "mugisha jules",
            role: "phd-doctor",
            clinic: "gahunga santre de cante"
        }
    ]
}