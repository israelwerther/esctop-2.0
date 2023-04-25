import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
import { Loan } from './entities/loan.entity';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(createLoanDto: CreateLoanDto): Promise<Loan>;
    findAll(contractNumber?: string): Promise<Loan[]>;
    findOne(id: string): Promise<Loan>;
    update(id: string, updateLoanDto: UpdateLoanDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
