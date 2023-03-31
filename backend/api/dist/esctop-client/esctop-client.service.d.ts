import { Repository } from 'typeorm';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
import { EsctopClient } from './entities/esctop-client.entity';
export declare class EsctopClientService {
    private readonly repo;
    constructor(repo: Repository<EsctopClient>);
    create(createEsctopClientDto: CreateEsctopClientDto): Promise<import("typeorm").InsertResult>;
    findAll(): Promise<EsctopClient[]>;
    findOne(id: number): Promise<EsctopClient>;
    update(id: number, updateEsctopClientDto: UpdateEsctopClientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
