import { Test, TestingModule } from '@nestjs/testing';
import { RapPhimService } from './rap-phim.service';

describe('RapPhimService', () => {
  let service: RapPhimService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RapPhimService],
    }).compile();

    service = module.get<RapPhimService>(RapPhimService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
