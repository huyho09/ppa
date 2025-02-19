import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

 @Get('init-db')
 async initializeDatabase() {
  await this.appService.onModuleInit();
  return {message: 'Database initialize successfully'}
 }
}