import { DoctorsModule } from './doctors.module';
import { DoctorsService } from './doctors.service';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import DoctorsController from './doctors.controller';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
