import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RapPhimService } from './rap-phim.service';
import { CreateRapPhimDto } from './dto/create-rap-phim.dto';
import { UpdateRapPhimDto } from './dto/update-rap-phim.dto';
import { ApiBody, ApiCreatedResponse } from '@nestjs/swagger';
import { RapPhim } from './entities/rap-phim.entity';

@Controller('rap-phim')
export class RapPhimController {
  constructor(private readonly rapPhimService: RapPhimService) {}

  @Post()
   @ApiCreatedResponse({ description: 'lấy id của layThongTinHeThongRap gán vào ma_he_thong_rap' }) 
   @ApiBody({
  schema: {
    type: 'object',
    properties: {
      ma_cum_rap: { type: 'number' },
      rap_info: {
        type: 'object',
        properties: {
          ma_rap: { type: 'number' },
          ten_rap: { type: 'string' },
        },
      },
    },
  },
})
 async create(@Body() createRapPhimDto: CreateRapPhimDto) {
    const newRapPhim=new RapPhim()
    newRapPhim.rap_info={
      ma_rap:createRapPhimDto.rap_info.ma_rap,
      ten_rap:createRapPhimDto.rap_info.ten_rap
    }
    newRapPhim.ma_cum_rap=createRapPhimDto.ma_cum_rap

    const saveRapPhim=await this.rapPhimService.create(newRapPhim)
    return{
      RapPhim:saveRapPhim
    }
  }

  @Get()
  findAll() {
    return this.rapPhimService.findAll();
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.rapPhimService.remove(+id);
  }
}
