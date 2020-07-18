import { Injectable, NestMiddleware, HttpException, HttpStatus } from '@nestjs/common';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: Function) {
    const authHeader = req.headers['authorization'];
    const parsedHeader = Buffer.from(authHeader.replace('Basic ', ''), 'base64').toString();
    const [userName, password] = parsedHeader.split(":")
    if (userName === "admin" && password === "!admin!") {
      next();
    } else {
      next(new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: "Authentication error: Username and Password not matching any user"
      }, 403))
    }
  }
}