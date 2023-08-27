import { Injectable,BadRequestException } from '@nestjs/common';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { Repository } from 'typeorm';
import { Cinema } from './entities/cinema.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CinemaService {
constructor(
  @InjectRepository(Cinema)
  private cineRepository:Repository<Cinema>
){}

  findAll() {
    return this.cineRepository.find();
  }

   async createCine(cineInfo:CreateCinemaDto): Promise<Cinema> {
    const cine = this.cineRepository.create(cineInfo);
    return this.cineRepository.save(cine);
   }

    async deleteData(id: number) {

  const imageToDelete = await this.cineRepository.findOne({where:{id:id}});
  if (!imageToDelete) {
    throw new BadRequestException(`file not found`);
  }

  await this.cineRepository.delete(id);
  return 'success'
}
}
