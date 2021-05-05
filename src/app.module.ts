import { DoctorsModule } from './doctors.module';
import { DoctorsService } from './doctors.service';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './doctors.middleware';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [DoctorsModule,MongooseModule.forRoot('mongodb+srv://root:edaedaeda@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
      consumer
        .apply(logger)
        .forRoutes({path: '**',method: RequestMethod.ALL})
  }
}
