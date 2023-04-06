import { Module } from '@nestjs/common';
import { CredcoopClientService } from './credcoop-client.service';
import { CredcoopClientController } from './credcoop-client.controller';

@Module({
  controllers: [CredcoopClientController],
  providers: [CredcoopClientService]
})
export class CredcoopClientModule {}
