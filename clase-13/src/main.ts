import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Transforma la entrada a la clase correspondiente
      whitelist: true, // Elimina propiedades no definidas en la clase
      forbidNonWhitelisted: true, // Lanza un error si se recibe una propiedad no permitida
    }),
  );

  const config = new DocumentBuilder()
    .setTitle('Nest App User')
    .setDescription('The User API description')
    .setVersion('1.0')
    // .addTag('User')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
