import { DoctorsModule } from './doctors.module';
import { DoctorsService } from './doctors.service';
import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './doctors.middleware';

@Module({
  imports: [DoctorsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
      consumer
        .apply(logger)
  }
}
