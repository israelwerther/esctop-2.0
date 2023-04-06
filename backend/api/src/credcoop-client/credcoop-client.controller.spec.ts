import { Test, TestingModule } from '@nestjs/testing';
import { CredcoopClientController } from './credcoop-client.controller';
import { CredcoopClientService } from './credcoop-client.service';

describe('CredcoopClientController', () => {
  let controller: CredcoopClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CredcoopClientController],
      providers: [CredcoopClientService],
    }).compile();

    controller = module.get<CredcoopClientController>(CredcoopClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
