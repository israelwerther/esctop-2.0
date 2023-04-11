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
exports.CredcoopClient = void 0;
const loan_entity_1 = require("../../loan/entities/loan.entity");
const typeorm_1 = require("typeorm");
const slugify_1 = require("slugify");
let CredcoopClient = class CredcoopClient {
    slugifyLoan() {
        console.log("SLUG 1");
        this.slug = (0, slugify_1.default)(this.name.substring(0, 20), {
            lower: true,
            replacement: '_'
        });
        console.log("SLUG 2", this.slug);
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CredcoopClient.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CredcoopClient.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CredcoopClient.prototype, "cpf", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], CredcoopClient.prototype, "slug", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CredcoopClient.prototype, "createdOn", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' }),
    __metadata("design:type", Date)
], CredcoopClient.prototype, "modifiedOn", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => loan_entity_1.Loan, (loan) => loan.credcoopClient),
    __metadata("design:type", Array)
], CredcoopClient.prototype, "loans", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CredcoopClient.prototype, "slugifyLoan", null);
CredcoopClient = __decorate([
    (0, typeorm_1.Entity)('credcoopClient')
], CredcoopClient);
exports.CredcoopClient = CredcoopClient;
//# sourceMappingURL=credcoop-client.entity.js.map