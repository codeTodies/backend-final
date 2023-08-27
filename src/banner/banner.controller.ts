import { Controller, Get,Delete,Param } from '@nestjs/common';
import { BannerService } from './banner.service';

@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}



  @Get('layDSBanner')
  findAll() {
    return this.bannerService.findAll();
  }
   @Delete('delete/:id')
 async deleteFile(@Param('id') id: number){
  return this.bannerService.deleteData(id)
 }

}
