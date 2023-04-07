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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Loan = void 0;
const typeorm_1 = require("typeorm");
const class_transformer_1 = require("class-transformer");
const slugify_1 = require("slugify");
const credcoop_client_entity_1 = require("../../credcoop-client/entities/credcoop-client.entity");
const esctop_client_entity_1 = require("../../esctop-client/entities/esctop-client.entity");
let Loan = class Loan {
    slugifyLoan() {
        console.log("=================== 1");
        this.slug = (0, slugify_1.default)(this.status.substring(0, 20), {
            lower: true,
            replacement: '_'
        });
    }
    createContractNumber() {
        console.log("Entrou");
        let modality;
        if (this.online) {
            modality = "1";
        }
        else {
            modality = "0";
        }
        this.contractNumber = modality + modality;
        console.log("Num Contract", this.contractNumber);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Loan.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], Loan.prototype, "contractNumber", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Loan.prototype, "amount", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Loan.prototype, "interestRate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Loan.prototype, "startDate", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Loan.prototype, "amountOfInstallments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], Loan.prototype, "installments", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loan.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Loan.prototype, "inPerson", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Boolean)
], Loan.prototype, "online", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Loan.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Loan.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], Loan.prototype, "modifiedOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], Loan.prototype, "credcoopClientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => credcoop_client_entity_1.CredcoopClient, (credcoopClient) => credcoopClient.loans, {
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'credcoopClientId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", credcoop_client_entity_1.CredcoopClient)
], Loan.prototype, "credcoopClient", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: 1 }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", Number)
], Loan.prototype, "esctopClientId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => esctop_client_entity_1.EsctopClient, (esctopClient) => esctopClient.loans, {
        eager: true
    }),
    (0, typeorm_1.JoinColumn)({
        name: 'esctopClientId',
        referencedColumnName: 'id'
    }),
    __metadata("design:type", esctop_client_entity_1.EsctopClient)
], Loan.prototype, "esctopClient", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Loan.prototype, "slugifyLoan", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Loan.prototype, "createContractNumber", null);
Loan = __decorate([
    (0, typeorm_1.Entity)('loan')
], Loan);
exports.Loan = Loan;
//# sourceMappingURL=loan.entity.js.map