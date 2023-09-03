import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MulterModule } from '@nestjs/platform-express/multer';
import { MovieModule } from './movie/movie.module';
import { BannerModule } from './banner/banner.module';
import { CinemaModule } from './cinema/cinema.module';
import { CumRapModule } from './cum-rap/cum-rap.module';
import { RapPhimModule } from './rap-phim/rap-phim.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MulterModule.register({
      dest:process.cwd() + '/upload'
    }),
    ConfigModule.forRoot({isGlobal: true, envFilePath:['.env']}),
    TypeOrmModule.forRootAsync({
      imports:[ConfigModule],
      inject:[ConfigService],
      useFactory:(ConfigService:ConfigService) => ({
        type:'postgres',
        host:ConfigService.get("DATABASE_HOST"),
        port:ConfigService.get<number>("DATABASE_PORT"),
        username:ConfigService.get("DATABASE_USERNAME"),
        password:ConfigService.get("DATABASE_PASSWORD"),
        synchronize:ConfigService.get<boolean>("DATABASE_SYNC"),
        logging:ConfigService.get<boolean>("DATABASE_LOGGING"),
        database:ConfigService.get("DATABASE_NAME"),
        entities:[__dirname + "/**/*.entity{.ts,.js}"],
      })
    }),
    MovieModule,
    BannerModule,
    CinemaModule,
    CumRapModule,
    RapPhimModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
