import { HttpExceptionFilter } from './http-request.filter';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalLogger } from './doctors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* adding global middleware */
  app.use(globalLogger)
  /* adding global exception filters */
  app.useGlobalFilters(new HttpExceptionFilter())
  await app.listen(3000);
}
bootstrap();
