import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { globalLogger } from './doctors.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  /* adding global middleware */
  app.use(globalLogger)
  await app.listen(3000);
}
bootstrap();
