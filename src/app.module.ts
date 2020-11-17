import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListingsController } from './listings/listings.controller';
import { ListingsService } from './listings/listings.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'local',
      synchronize: true,
    }),
  ],
  controllers: [AppController, ListingsController],
  providers: [AppService, ListingsService],
})
export class AppModule {}
