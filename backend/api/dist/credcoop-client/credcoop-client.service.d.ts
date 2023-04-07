import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
import { CredcoopClient } from './entities/credcoop-client.entity';
import { Repository } from 'typeorm';
export declare class CredcoopClientService {
    private readonly repo;
    constructor(repo: Repository<CredcoopClient>);
    create(createCredcoopClientDto: CreateCredcoopClientDto): Promise<CredcoopClient>;
    findAll(): Promise<CredcoopClient[]>;
    findOne(id: number): Promise<CredcoopClient>;
    update(id: number, updateCredcoopClientDto: UpdateCredcoopClientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
}
