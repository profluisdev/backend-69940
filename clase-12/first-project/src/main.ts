import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({
    transform: true, // Transforma la entrada a la clase correspondiente
    whitelist: true, // Elimina propiedades no definidas en la clase
    forbidNonWhitelisted: true, // Lanza un error si se recibe una propiedad no permitida
  }));
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
