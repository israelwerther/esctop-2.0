import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, ClassSerializerInterceptor, Query } from '@nestjs/common';
import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';

@Controller('loans')
@UseInterceptors(ClassSerializerInterceptor)
export class LoanController {
  constructor(private readonly loanService: LoanService) {}

  @Post()
  create(@Body() createLoanDto: CreateLoanDto) {
    return this.loanService.create(createLoanDto);
  }

  @Get()
  findAll(@Query('contractNumber') contractNumber?: string): Promise<Loan[]> {
    return this.loanService.findAll(contractNumber);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.loanService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLoanDto: UpdateLoanDto) {
    return this.loanService.update(+id, updateLoanDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loanService.remove(+id);
  }
}
