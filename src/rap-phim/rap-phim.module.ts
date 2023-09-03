import { Module } from '@nestjs/common';
import { RapPhimService } from './rap-phim.service';
import { RapPhimController } from './rap-phim.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RapPhim } from './entities/rap-phim.entity';
@Module({
  imports:[TypeOrmModule.forFeature([RapPhim])],
  controllers: [RapPhimController],
  providers: [RapPhimService],
})
export class RapPhimModule {}
