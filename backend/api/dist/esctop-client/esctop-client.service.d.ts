import { Repository } from 'typeorm';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
import { EsctopClient } from './entities/esctop-client.entity';
export declare class EsctopClientService {
    private readonly repo;
    constructor(repo: Repository<EsctopClient>);
    create(createEsctopClientDto: CreateEsctopClientDto): Promise<EsctopClient>;
    findAll(corporateName?: string): Promise<EsctopClient[]>;
    findOne(id: number): Promise<EsctopClient>;
    findBySlug(slug: string): Promise<EsctopClient>;
    update(slug: string, updateEsctopClientDto: UpdateEsctopClientDto): Promise<void>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
