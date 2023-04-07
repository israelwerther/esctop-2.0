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
exports.CredcoopClientController = void 0;
const common_1 = require("@nestjs/common");
const credcoop_client_service_1 = require("./credcoop-client.service");
const create_credcoop_client_dto_1 = require("./dto/create-credcoop-client.dto");
const update_credcoop_client_dto_1 = require("./dto/update-credcoop-client.dto");
let CredcoopClientController = class CredcoopClientController {
    constructor(credcoopClientService) {
        this.credcoopClientService = credcoopClientService;
    }
    create(createCredcoopClientDto) {
        return this.credcoopClientService.create(createCredcoopClientDto);
    }
    findAll() {
        return this.credcoopClientService.findAll();
    }
    findOne(id) {
        return this.credcoopClientService.findOne(+id);
    }
    update(id, updateCredcoopClientDto) {
        return this.credcoopClientService.update(+id, updateCredcoopClientDto);
    }
    remove(id) {
        return this.credcoopClientService.remove(+id);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_credcoop_client_dto_1.CreateCredcoopClientDto]),
    __metadata("design:returntype", void 0)
], CredcoopClientController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CredcoopClientController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CredcoopClientController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_credcoop_client_dto_1.UpdateCredcoopClientDto]),
    __metadata("design:returntype", void 0)
], CredcoopClientController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CredcoopClientController.prototype, "remove", null);
CredcoopClientController = __decorate([
    (0, common_1.Controller)('credcoop-client'),
    __metadata("design:paramtypes", [credcoop_client_service_1.CredcoopClientService])
], CredcoopClientController);
exports.CredcoopClientController = CredcoopClientController;
//# sourceMappingURL=credcoop-client.controller.js.map