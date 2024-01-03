import { NestMiddleware } from "@nestjs/common";
import { Request, Response } from "express";



export default class FirstMiddleware implements NestMiddleware {
    use(req: Request, res: Response, next: (error?: any) => void) {
        console.log(`Middleware 01...!!! ${req.url} - ${req.method} - ${new Date().toUTCString()}`)
        
        next()
    }
}