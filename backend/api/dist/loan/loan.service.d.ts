import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
import { Repository } from 'typeorm';
export declare class LoanService {
    private readonly repo;
    constructor(repo: Repository<Loan>);
    create(createLoanDto: CreateLoanDto): Promise<Loan>;
    findAll(contractNumber?: string): Promise<Loan[]>;
    findOne(id: number): Promise<Loan>;
    update(id: number, updateLoanDto: UpdateLoanDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
