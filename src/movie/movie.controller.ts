import { Controller, Get, Post, Body, Param, Query, Delete,UploadedFile, UseInterceptors, BadRequestException} from '@nestjs/common';
import { MovieService } from './movie.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { Express } from 'express';
import { CreateMovieDto } from './dto/create-movie.dto';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Movies } from './entities/movie.entity';
import { Banner } from 'src/banner/entities/banner.entity';
import { BannerService } from 'src/banner/banner.service';
import { Pagination } from 'nestjs-typeorm-paginate';
@Controller('movie')
export class MovieController {
  constructor(private readonly movieService: MovieService, private readonly bannerService:BannerService) {}

   @Post('uploadPhim')
 @UseInterceptors(FileInterceptor('hinh_anh', {
  storage: diskStorage({
    destination: process.cwd() + '/uploads',
    filename: (req, file, callback) => {
      const name = file.originalname;
      callback(null, name);
    },
  }),
  fileFilter: (req, file, cb) => {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
      cb(new Error('File not match'), false);
    }
    cb(null, true);
  },
}))
 @ApiConsumes('multipart/form-data')
  @ApiBody({
    // type: 'multipart/form-data',
    schema: {
      type: 'object',
      properties: {
        ten_phim: { type: 'string' },
        trailer: { type: 'string' },
        hinh_anh: { type: 'string', format: 'binary' },
        mo_ta: { type: 'string' },
        ngay_khoi_chieu: { type: 'string', format: 'date', example: '1999-11-15' },
        danh_gia: { type: 'number' },
        hot: { type: 'boolean' },
        dang_chieu: { type: 'boolean' },
        sap_chieu: { type: 'boolean' },
      },
      required: ['hinh_anh'],
    },
  })
  async uploadFile(
    @UploadedFile() file: Express.Multer.File,
    @Body() bodyPhim: CreateMovieDto
  ) {
    
    if (!file) {
      throw new BadRequestException('File should be an image file');
    }
    if (!bodyPhim) {
      throw new BadRequestException('Empty value');
    }

    const newPhim = new Movies();
    
    // Gán giá trị từ bodyPhim vào entity
    newPhim.ten_phim = bodyPhim.ten_phim;
    newPhim.trailer = bodyPhim.trailer;
    newPhim.hinh_anh= `/upload/${file.originalname}`;
    newPhim.mo_ta = bodyPhim.mo_ta;
    newPhim.ngay_khoi_chieu = bodyPhim.ngay_khoi_chieu;
    newPhim.danh_gia = bodyPhim.danh_gia;
    newPhim.hot = bodyPhim.hot;
    newPhim.dang_chieu = bodyPhim.dang_chieu;
    newPhim.sap_chieu = bodyPhim.sap_chieu;
    
    const savedPhim = await this.movieService.createMovie(newPhim);
     const newBanner = new Banner();
    newBanner.hinh_anh = `http://localhost:3000/upload/${file.originalname}`;
    newBanner.ma_phim = savedPhim;
    
     const saveBanner=await this.bannerService.createBanner(newBanner)
    // Trả về kết quả
    return {
      message: 'Success, example for image link: http://localhost:3000/upload/scale.jpg',
      // url: `/upload/${file.originalname}`,
      movie: savedPhim
    };
  }

  @Get('layDanhSachPhim')
  findAll() {
    return this.movieService.findAll();
  }

    @Get('layDSPhimPhanTrang')
  async getPaginatedMovies(
    @Query('page') page: number,
    @Query('limit') limit: number,
  ): Promise<Pagination<Movies>> {
    return this.movieService.getPaginatedMovies(page, limit);
  }

    @Get('layThongTinPhim/:id')
    async getMovieInfo(@Param('id') id:number)
    {
      return this.movieService.getMovieByMaPhim(id);
    }

   @Delete('xoaPhim/:id')
 async deleteFile(@Param('id') id: number){
  return this.movieService.deleteData(id)
 }
}
