import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Movies } from 'src/movie/entities/movie.entity';

export class CreateBannerDto {
  @IsNotEmpty()
  @IsString()
  hinh_anh: string;

  @IsNotEmpty()
  @IsNumber()
  ma_phim: Movies;
}