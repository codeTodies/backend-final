import { Controller, Get, Post, Body, Delete, Param } from '@nestjs/common';
import { CumRapService } from './cum-rap.service';
import { CreateCumRapDto } from './dto/create-cum-rap.dto';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { CumRap } from './entities/cum-rap.entity';

@Controller('cumRap')
export class CumRapController {
  constructor(private readonly cumRapService: CumRapService) {}

  @Post()
  @ApiCreatedResponse({ description: 'lấy id của layThongTinHeThongRap gán vào ma_he_thong_rap' }) 
   @ApiBody({
  schema: {
    type: 'object',
    properties: {
      ma_he_thong_rap: { type: 'number' },
      cum_rap_info: {
        type: 'object',
        properties: {
          ma_cum_rap: { type: 'string' },
          ten_cum_rap: { type: 'string' },
          dia_chi: { type: 'string' },
        },
        required: ['ten_cum_rap', 'dia_chi'],
      },
    },
    required: ['ma_he_thong_rap', 'cum_rap_info'],
  },
})
 async create(@Body() createCumRapDto: CreateCumRapDto) {
    const newCumRap=new CumRap()
    newCumRap.cum_rap_info={
      ma_cum_rap:createCumRapDto.cum_rap_info.ma_cum_rap,
      ten_cum_rap:createCumRapDto.cum_rap_info.ten_cum_rap,
      dia_chi:createCumRapDto.cum_rap_info.dia_chi
    }
    newCumRap.ma_he_thong_rap=createCumRapDto.ma_he_thong_rap


    
    const saveCumRap= await this.cumRapService.create(newCumRap)
    return {
      CumRap:saveCumRap
    }
  }
 
  
  @Get('get-cum-rap/:ma_he_thong_rap')
async findAll(@Param('ma_he_thong_rap') maHeThongRap: string) {
  return await this.cumRapService.findAll(maHeThongRap);
}



  @Delete('remove')
  remove() {
    return this.cumRapService.remove();
  }
}
