import { Module } from '@nestjs/common';
import { CredcoopClientService } from './credcoop-client.service';
import { CredcoopClientController } from './credcoop-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CredcoopClient } from './entities/credcoop-client.entity';

@Module({
  controllers: [CredcoopClientController],
  providers: [CredcoopClientService],
  imports: [
    TypeOrmModule.forFeature([CredcoopClient])
  ]
})
export class CredcoopClientModule {}
