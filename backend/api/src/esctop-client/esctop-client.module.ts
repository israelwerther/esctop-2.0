import { Module } from '@nestjs/common';
import { EsctopClientService } from './esctop-client.service';
import { EsctopClientController } from './esctop-client.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EsctopClient } from './entities/esctop-client.entity';

@Module({
  controllers: [EsctopClientController],
  providers: [EsctopClientService],
  imports: [
    TypeOrmModule.forFeature([EsctopClient])
  ]
})
export class EsctopClientModule {}
