import { Controller, Get, Post, Body } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("/user")
export class UserController {
  constructor(private readonly appService: AppService) { }

  @Post()
  createUser(@Body() details: IUserDetails): boolean {
    if (details.first_name && details.last_name &&
      details.country && details.email) {
        return true;
      }
      return false;
  }
}
