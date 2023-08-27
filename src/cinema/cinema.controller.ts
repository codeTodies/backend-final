import { Controller, Get, Post,Delete,Param, Body, UseInterceptors, UploadedFile, BadRequestException} from '@nestjs/common';
import { CinemaService } from './cinema.service';
import { CreateCinemaDto } from './dto/create-cinema.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { ApiBody, ApiConsumes } from '@nestjs/swagger';
import { Cinema } from './entities/cinema.entity';

@Controller('cinema')
export class CinemaController {
  constructor(private readonly cinemaService: CinemaService) {}

  @Post('themRapChieu')
  @UseInterceptors(FileInterceptor('logo',{
    storage:diskStorage({
      destination:process.cwd() + '/uploads',
      filename:(req,file,callback)=>{
        const name=file.originalname;
        callback(null,name)
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
    schema:{
      type: 'object',
      properties:{
        maHeThongRap:{type:'string'},
        tenHeThongRap:{type:'string'},
        biDanh:{type:'string'},
        logo:{type:'string', format:'binary'},
      },
      required:['logo']
    }
  })
  async postCine(@UploadedFile() file:Express.Multer.File,@Body() createCinemaDto: CreateCinemaDto) {
    if(!file)
    {
      throw new BadRequestException('file should be an image file')
    }
     if (!createCinemaDto) {
      throw new BadRequestException('Empty value');
    }
    const newCine= new Cinema()
    newCine.maHeThongRap=createCinemaDto.maHeThongRap
    newCine.tenHeThongRap=createCinemaDto.tenHeThongRap
    newCine.biDanh=createCinemaDto.biDanh
    newCine.logo= `/upload/${file.originalname}`
    const saveCine=await this.cinemaService.createCine(newCine)
    
    return {
      message: 'Success, example for image link: http://localhost:3000/upload/scale.jpg',
      // url: `/upload/${file.originalname}`,
      cinema:saveCine
    };
  }

  @Get('layThongTinHeThongRap')
  findAll() {
    return this.cinemaService.findAll();
  }


  @Delete('xoaRapChieu/:id')
 async deleteFile(@Param('id') id: number){
  return this.cinemaService.deleteData(id)
 }
}
