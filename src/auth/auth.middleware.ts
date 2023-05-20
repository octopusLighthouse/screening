import { NestMiddleware, Injectable, Logger } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
    async use(req: Request, res: Response, next: NextFunction) {
        req['account-api-key'] = req.headers['account-api-key'] || undefined;
        req['organisation-api-key'] = req.headers['organisation-api-key'] || undefined;
        next();
    }
}