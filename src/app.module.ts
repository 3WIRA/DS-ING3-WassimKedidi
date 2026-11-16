import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { TravelModule } from './travel/travel.module.js';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', 'src/.env'],
      isGlobal: true,
    }),
    TravelModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}