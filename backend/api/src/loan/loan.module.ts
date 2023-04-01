import { Module } from '@nestjs/common';
import { LoanService } from './loan.service';
import { LoanController } from './loan.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Loan } from './entities/loan.entity';

@Module({
  controllers: [LoanController],
  providers: [LoanService],
  imports: [
    TypeOrmModule.forFeature([Loan])
  ]
})
export class LoanModule {}
