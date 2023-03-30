import { Module } from '@nestjs/common';
import { EsctopClientService } from './esctop-client.service';
import { EsctopClientController } from './esctop-client.controller';

@Module({
  controllers: [EsctopClientController],
  providers: [EsctopClientService]
})
export class EsctopClientModule {}
