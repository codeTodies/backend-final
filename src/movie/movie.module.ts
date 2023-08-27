import { Module } from '@nestjs/common';
import { MovieService } from './movie.service';
import { MovieController } from './movie.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movies } from './entities/movie.entity';
import { BannerService } from 'src/banner/banner.service';
import { Banner } from 'src/banner/entities/banner.entity';

@Module({
  imports:[TypeOrmModule.forFeature([Movies,Banner])],
  controllers: [MovieController],
  providers: [MovieService,BannerService],
})
export class MovieModule {}
