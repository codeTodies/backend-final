import { Injectable,BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movies } from './entities/movie.entity';
import { paginate, Pagination } from 'nestjs-typeorm-paginate';
@Injectable()
export class MovieService {

  constructor(
    @InjectRepository(Movies)
    private movieRepository:Repository<Movies>,
  ){}
   async createMovie(createMovie:CreateMovieDto): Promise<Movies> {
    const movie = this.movieRepository.create(createMovie);
    return this.movieRepository.save(movie);
   }
  findAll() {
    return this.movieRepository.find();
  }

 async getPaginatedMovies(page: number, limit: number): Promise<Pagination<Movies>> {
    return paginate(this.movieRepository, { page, limit });
  }
  async deleteData(id: number) {

  const imageToDelete = await this.movieRepository.findOne({where:{ma_phim:id}});
  if (!imageToDelete) {
    throw new BadRequestException(`file not found`);
  }

  await this.movieRepository.delete(id);
   return 'success'
}
async getMovieByMaPhim(id:number)
{
  const check=await this.movieRepository.findOne({where:{ma_phim:id}})
  if(!check)
  {
    throw new BadRequestException('movie not found');
  }
  else
  {
    return check
  }
}
}
