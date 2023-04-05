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
exports.EsctopClient = void 0;
const loan_entity_1 = require("../../loan/entities/loan.entity");
const typeorm_1 = require("typeorm");
let EsctopClient = class EsctopClient {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], EsctopClient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "corporateName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "fantasyName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "cnpj", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], EsctopClient.prototype, "foundation", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "stateRegistration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "municipalRegistration", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], EsctopClient.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EsctopClient.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], EsctopClient.prototype, "modifiedOn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => loan_entity_1.Loan, (loan) => loan.esctopClient),
    __metadata("design:type", Array)
], EsctopClient.prototype, "loans", void 0);
EsctopClient = __decorate([
    (0, typeorm_1.Entity)('esctopClient')
], EsctopClient);
exports.EsctopClient = EsctopClient;
//# sourceMappingURL=esctop-client.entity.js.map