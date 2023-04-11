import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
import { CredcoopClient } from './entities/credcoop-client.entity';
import { Repository } from 'typeorm';
export declare class CredcoopClientService {
    private readonly repo;
    constructor(repo: Repository<CredcoopClient>);
    create(createCredcoopClientDto: CreateCredcoopClientDto): Promise<CredcoopClient>;
    findAll(name?: string, cpf?: string): Promise<CredcoopClient[]>;
    findOne(id: number): Promise<CredcoopClient>;
    findBySlug(slug: string): Promise<CredcoopClient>;
    update(slug: string, updateCredcoopClientDto: UpdateCredcoopClientDto): Promise<CredcoopClient>;
    remove(id: number): Promise<{
        success: boolean;
        credcoopClient: CredcoopClient;
    }>;
}
