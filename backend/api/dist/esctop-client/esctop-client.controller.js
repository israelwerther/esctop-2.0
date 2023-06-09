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
exports.EsctopClientController = void 0;
const common_1 = require("@nestjs/common");
const esctop_client_service_1 = require("./esctop-client.service");
const create_esctop_client_dto_1 = require("./dto/create-esctop-client.dto");
const update_esctop_client_dto_1 = require("./dto/update-esctop-client.dto");
let EsctopClientController = class EsctopClientController {
    constructor(esctopClientService) {
        this.esctopClientService = esctopClientService;
    }
    create(createEsctopClientDto) {
        return this.esctopClientService.create(createEsctopClientDto);
    }
    findAll(corporateName) {
        return this.esctopClientService.findAll(corporateName);
    }
    findOne(id) {
        return this.esctopClientService.findOne(+id);
    }
    findBySlug(slug) {
        return this.esctopClientService.findBySlug(slug);
    }
    update(slug, updateEsctopClientDto) {
        return this.esctopClientService.update(slug, updateEsctopClientDto);
    }
    remove(id) {
        return this.esctopClientService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_esctop_client_dto_1.CreateEsctopClientDto]),
    __metadata("design:returntype", void 0)
], EsctopClientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('corporateName')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], EsctopClientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EsctopClientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)('/slug/:slug'),
    __param(0, (0, common_1.Param)('slug')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EsctopClientController.prototype, "findBySlug", null);
__decorate([
    (0, common_1.Patch)(':slug'),
    __param(0, (0, common_1.Param)('slug')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_esctop_client_dto_1.UpdateEsctopClientDto]),
    __metadata("design:returntype", void 0)
], EsctopClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], EsctopClientController.prototype, "remove", null);
EsctopClientController = __decorate([
    (0, common_1.Controller)('esctop-client'),
    __metadata("design:paramtypes", [esctop_client_service_1.EsctopClientService])
], EsctopClientController);
exports.EsctopClientController = EsctopClientController;
//# sourceMappingURL=esctop-client.controller.js.map