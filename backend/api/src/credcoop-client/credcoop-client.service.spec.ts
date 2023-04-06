import { Test, TestingModule } from '@nestjs/testing';
import { CredcoopClientService } from './credcoop-client.service';

describe('CredcoopClientService', () => {
  let service: CredcoopClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CredcoopClientService],
    }).compile();

    service = module.get<CredcoopClientService>(CredcoopClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
