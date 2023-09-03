import { Test, TestingModule } from '@nestjs/testing';
import { RapPhimController } from './rap-phim.controller';
import { RapPhimService } from './rap-phim.service';

describe('RapPhimController', () => {
  let controller: RapPhimController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RapPhimController],
      providers: [RapPhimService],
    }).compile();

    controller = module.get<RapPhimController>(RapPhimController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
