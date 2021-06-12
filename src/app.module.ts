import { DoctorsModule } from './doctors.module';
import { DoctorsService } from './doctors.service';
import { Module, NestModule, MiddlewareConsumer, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { logger } from './doctors.middleware';
import { MongooseModule } from '@nestjs/mongoose';
import { APP_GUARD, APP_INTERCEPTOR } from '@nestjs/core';
import { RolesGuard } from './guards/role.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';

@Module({
  imports: [DoctorsModule,MongooseModule.forRoot('mongodb+srv://root:edaedaeda@cluster0.ulkpq.mongodb.net/myFirstDatabase?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: RolesGuard
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggingInterceptor
    }
  ],
})
export class AppModule implements NestModule{
  configure(consumer: MiddlewareConsumer){
      consumer
        .apply(logger)
        .forRoutes({path: '**',method: RequestMethod.ALL})
  }
}
