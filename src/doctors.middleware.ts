import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction } from "express";

/* CLASS MIDDLEWARE */
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
    next()
}

/* GLOBAL MIDDLEWARE */
export function globalLogger(req: Request,res: Response,next: NextFunction){
    console.log("Global middleware .........");
    next()    
}