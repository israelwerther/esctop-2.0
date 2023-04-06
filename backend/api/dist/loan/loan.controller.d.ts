import { LoanService } from './loan.service';
import { CreateLoanDto } from './dto/create-loan.dto';
import { UpdateLoanDto } from './dto/update-loan.dto';
export declare class LoanController {
    private readonly loanService;
    constructor(loanService: LoanService);
    create(createLoanDto: CreateLoanDto): Promise<import("./entities/loan.entity").Loan>;
    findAll(): Promise<import("./entities/loan.entity").Loan[]>;
    findOne(id: string): Promise<import("./entities/loan.entity").Loan>;
    update(id: string, updateLoanDto: UpdateLoanDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
