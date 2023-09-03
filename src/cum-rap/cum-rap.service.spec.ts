import { Test, TestingModule } from '@nestjs/testing';
import { CumRapService } from './cum-rap.service';

describe('CumRapService', () => {
  let service: CumRapService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CumRapService],
    }).compile();

    service = module.get<CumRapService>(CumRapService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
