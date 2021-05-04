import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

@Injectable()
export class LoggerDoctorMiddleware implements NestMiddleware{
    use(req: Request,res: Response,next: NextFunction){
        console.log("you are accessing doctors .......");
        next()        
    }
}
/* FUNCTIONAL MIDDLEWARE */

export function logger(req: Request,res: Response,next: NextFunction){
    console.log("Accessing any router .....");
    
}