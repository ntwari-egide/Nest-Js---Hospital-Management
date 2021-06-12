import { HttpExceptionFilter } from './http-request.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalLogger } from './doctors.middleware';
import { AuthGuard } from './guards/auth.guard';
import { LoggingInterceptor } from './interceptors/logging.interceptor';
import { CacheInterceptor } from './interceptors/cache.interceptor';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* adding global middleware */
  app.use(globalLogger)
  /* adding global exception filters */
  app.useGlobalFilters(new HttpExceptionFilter())

  app.useGlobalGuards(new AuthGuard())

  app.useGlobalInterceptors(new LoggingInterceptor())

  app.useGlobalInterceptors(new CacheInterceptor())

  await app.listen(3000);
}
bootstrap();
