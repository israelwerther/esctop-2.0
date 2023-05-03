import { BadRequestException,  Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

const entityName = "Loan";

@Injectable()
export class LoanService {
  constructor(@InjectRepository(Loan) private readonly repo: Repository<Loan>){
  }

  async create(createLoanDto: CreateLoanDto) {
    const loan = new Loan();
    Object.assign(loan, createLoanDto);
    this.repo.create(loan);
    console.log("createLoanDto = ",)
    return await this.repo.save(loan);
  }

  async findAll(contractNumber?: string) {
    const queryBuilder = this.repo.createQueryBuilder('loan');

    if (contractNumber) {
      queryBuilder.andWhere('loan.contractNumber LIKE :contractNumber', { contractNumber: `%${contractNumber}%` });
    }

    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const loan = await this.repo.findOne({where:{id}})
    if (!loan) {
      throw new BadRequestException('Loan not found');
    }
    return loan;
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    return this.repo.update(id, updateLoanDto);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
