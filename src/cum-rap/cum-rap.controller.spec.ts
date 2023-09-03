import { Test, TestingModule } from '@nestjs/testing';
import { CumRapController } from './cum-rap.controller';
import { CumRapService } from './cum-rap.service';

describe('CumRapController', () => {
  let controller: CumRapController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CumRapController],
      providers: [CumRapService],
    }).compile();

    controller = module.get<CumRapController>(CumRapController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
