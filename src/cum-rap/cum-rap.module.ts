import { Module } from '@nestjs/common';
import { CumRapService } from './cum-rap.service';
import { CumRapController } from './cum-rap.controller';
import { CumRap } from './entities/cum-rap.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports:[TypeOrmModule.forFeature([CumRap])],
  controllers: [CumRapController],
  providers: [CumRapService],
})
export class CumRapModule {}
