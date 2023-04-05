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
exports.EsctopClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const esctop_client_entity_1 = require("./entities/esctop-client.entity");
let EsctopClientService = class EsctopClientService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createEsctopClientDto) {
        const slug = createEsctopClientDto.corporateName.split(" ").join('_').toLowerCase();
        return await this.repo.insert(Object.assign(Object.assign({}, createEsctopClientDto), { slug }));
    }
    async findAll() {
        return await this.repo.find();
    }
    async findOne(id) {
        const esctopClient = await this.repo.findOne({ where: { id } });
        if (!esctopClient) {
            throw new common_1.BadRequestException('Client esctop not found');
        }
        return esctopClient;
    }
    async update(id, updateEsctopClientDto) {
        return await this.repo.update(id, updateEsctopClientDto);
    }
    async remove(id) {
        return await this.repo.delete(id);
    }
};
EsctopClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(esctop_client_entity_1.EsctopClient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], EsctopClientService);
exports.EsctopClientService = EsctopClientService;
//# sourceMappingURL=esctop-client.service.js.map