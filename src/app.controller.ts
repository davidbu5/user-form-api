import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) { }

  @Get("countriesNames")
  getCountriesNamesList(): string[] {
    return ["Israel", "Ireland", "Japan", "USA", "Poland", "Morroco"];
  }

  @Get("login")
  login(): boolean {
    return true;
  }
}
