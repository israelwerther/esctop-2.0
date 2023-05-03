"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoanService = void 0;
const common_1 = require("@nestjs/common");
const loan_entity_1 = require("./entities/loan.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const entityName = "Loan";
let LoanService = class LoanService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createLoanDto) {
        const loan = new loan_entity_1.Loan();
        Object.assign(loan, createLoanDto);
        this.repo.create(loan);
        console.log("createLoanDto = ");
        return await this.repo.save(loan);
    }
    async findAll(contractNumber) {
        const queryBuilder = this.repo.createQueryBuilder('loan');
        if (contractNumber) {
            queryBuilder.andWhere('loan.contractNumber LIKE :contractNumber', { contractNumber: `%${contractNumber}%` });
        }
        return await queryBuilder.getMany();
    }
    async findOne(id) {
        const loan = await this.repo.findOne({ where: { id } });
        if (!loan) {
            throw new common_1.BadRequestException('Loan not found');
        }
        return loan;
    }
    async update(id, updateLoanDto) {
        return this.repo.update(id, updateLoanDto);
    }
    async remove(id) {
        return this.repo.delete(id);
    }
};
LoanService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(loan_entity_1.Loan)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LoanService);
exports.LoanService = LoanService;
//# sourceMappingURL=loan.service.js.map