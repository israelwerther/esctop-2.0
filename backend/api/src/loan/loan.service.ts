import { BadRequestException,  Injectable } from '@nestjs/common';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class LoanService {
  constructor(@InjectRepository(Loan) private readonly repo: Repository<Loan>){
  }

  async create(createLoanDto: CreateLoanDto) {
    const slug = createLoanDto.contractNumber;
    return await this.repo.insert({ ...createLoanDto, slug });
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const post = await this.repo.findOne({where:{id}});
    if (!post) {
      throw new BadRequestException('Loan not found');
    }
    return post;
  }

  async update(id: number, updateLoanDto: UpdateLoanDto) {
    return this.repo.update(id, updateLoanDto);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
