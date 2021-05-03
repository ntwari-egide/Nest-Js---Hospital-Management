import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DoctorsController from './doctors.controler';

@Module({
  imports: [],
  controllers: [AppController,DoctorsController],
  providers: [AppService],
})
export class AppModule {}
