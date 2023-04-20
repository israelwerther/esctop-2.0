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
exports.CredcoopClientService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const credcoop_client_entity_1 = require("./entities/credcoop-client.entity");
const typeorm_2 = require("typeorm");
const entityName = "Credcoop Client";
let CredcoopClientService = class CredcoopClientService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createCredcoopClientDto) {
        const credcoopClient = new credcoop_client_entity_1.CredcoopClient();
        Object.assign(credcoopClient, createCredcoopClientDto);
        this.repo.create(credcoopClient);
        return await this.repo.save(credcoopClient);
    }
    async findAll(name, cpf) {
        const queryBuilder = this.repo.createQueryBuilder('credcoopClient');
        if (name) {
            queryBuilder.andWhere('credcoopClient.name LIKE :name', { name: `%${name}%` });
        }
        if (cpf) {
            queryBuilder.andWhere('credcoopClient.cpf = :cpf', { cpf });
        }
        return await queryBuilder.getMany();
    }
    async findOne(id) {
        const credcoopClient = await this.repo.findOne({ where: { id } });
        if (!credcoopClient) {
            throw new common_1.BadRequestException(`${entityName} not found`);
        }
        return credcoopClient;
    }
    async findBySlug(slug) {
        console.log(`here 1 ${slug}`);
        try {
            const credcoopClient = await this.repo.findOneOrFail({ where: { slug } });
            return credcoopClient;
        }
        catch (err) {
            console.log("here 2");
            throw new common_1.BadRequestException(`${entityName} with slug ${slug} not found`);
        }
    }
    async update(slug, updateCredcoopClientDto) {
        const credcoopClient = await this.repo.findOne({ where: { slug } });
        if (!credcoopClient) {
            throw new common_1.BadRequestException(`${entityName} not found`);
        }
        credcoopClient.modifiedOn = new Date(Date.now());
        Object.assign(credcoopClient, updateCredcoopClientDto);
        return this.repo.save(credcoopClient);
    }
    async remove(id) {
        const credcoopClient = await this.repo.findOne({ where: { id } });
        if (!credcoopClient) {
            throw new common_1.BadRequestException(`${entityName} not found`);
        }
        await this.repo.remove(credcoopClient);
        return { success: true, credcoopClient };
    }
};
CredcoopClientService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(credcoop_client_entity_1.CredcoopClient)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CredcoopClientService);
exports.CredcoopClientService = CredcoopClientService;
//# sourceMappingURL=credcoop-client.service.js.map