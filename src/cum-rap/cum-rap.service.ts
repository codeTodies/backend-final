import { Injectable } from '@nestjs/common';
import { CreateCumRapDto } from './dto/create-cum-rap.dto';
import { UpdateCumRapDto } from './dto/update-cum-rap.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CumRap } from './entities/cum-rap.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CumRapService {
  constructor(
    @InjectRepository(CumRap)
    private cumRapRepository:Repository<CumRap>
  ){}
 async create(createCumRapDto: CreateCumRapDto): Promise<CumRap> {
    const cine=this.cumRapRepository.create(createCumRapDto);
    return this.cumRapRepository.save(cine);
  }

async findAll(maHeThongRap?: string) {
  const list = await this.cumRapRepository.find({ relations: ['ma_he_thong_rap','ma_rap'] });

  const groupedCine = {};

  list.forEach(infoCine => {
    const maHeThongRap = infoCine.ma_he_thong_rap.maHeThongRap;
    const cumRapInfo = {
      id_cum_rap:infoCine.id,
      ma_cum_rap: infoCine.cum_rap_info.ma_cum_rap,
      ten_cum_rap: infoCine.cum_rap_info.ten_cum_rap,
      dia_chi: infoCine.cum_rap_info.dia_chi,
      rap_info:{
      ma_rap:infoCine.ma_rap.rap_info.ma_rap,
      ten_rap:infoCine.ma_rap.rap_info.ten_rap
    }
    };

    if (!groupedCine[maHeThongRap]) {
      groupedCine[maHeThongRap] = [];
    }

    groupedCine[maHeThongRap].push(cumRapInfo);
  });

  if (maHeThongRap) {
    return groupedCine[maHeThongRap] || [];
  }

  const result = Object.keys(groupedCine).map(maHeThongRap => ({
    ma_he_thong_rap: maHeThongRap,
    cum_rap_info: groupedCine[maHeThongRap],
  }));
 
  return result;
}

  findOne(id: number) {
    return `This action returns a #${id} cumRap`;
  }

  update(id: number, updateCumRapDto: UpdateCumRapDto) {
    return `This action updates a #${id} cumRap`;
  }

  remove() {
    return this.cumRapRepository.clear();
  }
}
