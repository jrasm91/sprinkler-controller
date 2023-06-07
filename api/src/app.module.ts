import { Module, ValidationPipe } from '@nestjs/common';
import { APP_PIPE } from '@nestjs/core';
import { TypeOrmModule } from '@nestjs/typeorm';
import { config } from 'dotenv';
import { dbConfig } from './database.config';
import { ZoneModule } from './zone/zone.module';

config();

@Module({
  imports: [ZoneModule, TypeOrmModule.forRoot(dbConfig)],
  controllers: [],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        transform: true,
        whitelist: true,
        forbidNonWhitelisted: true,
      }),
    },
  ],
})
export class AppModule {}
