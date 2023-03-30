import { Test, TestingModule } from '@nestjs/testing';
import { EsctopClientService } from './esctop-client.service';

describe('EsctopClientService', () => {
  let service: EsctopClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [EsctopClientService],
    }).compile();

    service = module.get<EsctopClientService>(EsctopClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
