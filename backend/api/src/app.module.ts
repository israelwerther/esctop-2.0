import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EsctopClientModule } from './esctop-client/esctop-client.module';
import { LoanModule } from './loan/loan.module';
import { CredcoopClientModule } from './credcoop-client/credcoop-client.module';

@Module({
  imports: [
    EsctopClientModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      database: 'esctop-db',
      username: 'root',
      password: 'My7Pass@Word_9_8A_zE',
      port: 3306,
      autoLoadEntities: true,
      synchronize: true
    }),
    LoanModule,
    CredcoopClientModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
