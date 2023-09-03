import { Injectable } from '@nestjs/common';
import { Banner } from './entities/banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateBannerDto } from './dto/create-banner.dto';
@Injectable()
export class BannerService {
constructor(
    @InjectRepository(Banner)
    private bannerRepository:Repository<Banner>,
  ){}

   async createBanner(createBanner:CreateBannerDto): Promise<Banner> {
    const banner = this.bannerRepository.create(createBanner);
    
    return this.bannerRepository.save(banner);
   }
 async findAll() {
   const test = await this.bannerRepository.find({
  relations: ['ma_phim'],
});
    const listMovie=test.map(infoMovie=>({      
      ma_banner:infoMovie.ma_banner,
      ma_phim: infoMovie.ma_phim.ma_phim,
      hinh_anh:infoMovie.hinh_anh,
      
    }))
    return listMovie
  }

  async deleteData(id: number) {
 

  await this.bannerRepository.delete(id);
}
}
