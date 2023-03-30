import { Test, TestingModule } from '@nestjs/testing';
import { EsctopClientController } from './esctop-client.controller';
import { EsctopClientService } from './esctop-client.service';

describe('EsctopClientController', () => {
  let controller: EsctopClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [EsctopClientController],
      providers: [EsctopClientService],
    }).compile();

    controller = module.get<EsctopClientController>(EsctopClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
