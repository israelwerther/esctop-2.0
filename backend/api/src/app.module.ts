import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EsctopClientModule } from './esctop-client/esctop-client.module';

@Module({
  imports: [EsctopClientModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
