import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {
        if( req.baseUrl == '/auth' ) {
            console.log('-> Auth Request...');
        }
        // console.log(res);
        console.log('Request...');
        next();
    }
    
}