import { Injectable } from '@nestjs/common';
import { CreateRapPhimDto } from './dto/create-rap-phim.dto';
import { UpdateRapPhimDto } from './dto/update-rap-phim.dto';
import { RapPhim } from './entities/rap-phim.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RapPhimService {
   constructor(
    @InjectRepository(RapPhim)
    private rapPhimRepository:Repository<RapPhim>
  ){}
  create(createRapPhimDto: CreateRapPhimDto):Promise<RapPhim> {
    const rap=this.rapPhimRepository.create(createRapPhimDto);
    return this.rapPhimRepository.save(rap)
  }

  findAll() {
    return this.rapPhimRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} rapPhim`;
  }

  update(id: number, updateRapPhimDto: UpdateRapPhimDto) {
    return `This action updates a #${id} rapPhim`;
  }

  remove(id: number) {
    return `This action removes a #${id} rapPhim`;
  }
}
