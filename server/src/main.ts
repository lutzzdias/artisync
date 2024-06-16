import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: {
            credentials: true,
            origin: 'http://localhost:3000',
        },
    });
    app.useGlobalPipes(new ValidationPipe()); // Allows for validation of DTOs with decorators
    await app.listen(3333);
}
bootstrap();
