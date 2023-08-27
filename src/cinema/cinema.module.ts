import { Module } from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CinemaController } from './cinema.controller';
import { Cinema } from './entities/cinema.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([Cinema])],
  controllers: [CinemaController],
  providers: [CinemaService],
})
export class CinemaModule {}
