import { CredcoopClientService } from './credcoop-client.service';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
import { CredcoopClient } from './entities/credcoop-client.entity';
export declare class CredcoopClientController {
    private readonly credcoopClientService;
    constructor(credcoopClientService: CredcoopClientService);
    create(createCredcoopClientDto: CreateCredcoopClientDto): Promise<CredcoopClient>;
    findAll(name?: string, cpf?: string): Promise<CredcoopClient[]>;
    findOne(id: string): Promise<CredcoopClient>;
    findBySlug(slug: string): Promise<CredcoopClient>;
    update(slug: string, updateCredcoopClientDto: UpdateCredcoopClientDto): Promise<CredcoopClient>;
    remove(id: string): Promise<{
        success: boolean;
        credcoopClient: CredcoopClient;
    }>;
}
