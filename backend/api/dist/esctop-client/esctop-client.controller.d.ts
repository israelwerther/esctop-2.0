import { EsctopClientService } from './esctop-client.service';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
import { EsctopClient } from './entities/esctop-client.entity';
export declare class EsctopClientController {
    private readonly esctopClientService;
    constructor(esctopClientService: EsctopClientService);
    create(createEsctopClientDto: CreateEsctopClientDto): Promise<EsctopClient>;
    findAll(corporateName?: string): Promise<EsctopClient[]>;
    findOne(id: string): Promise<EsctopClient>;
    findBySlug(slug: string): Promise<EsctopClient>;
    update(slug: string, updateEsctopClientDto: UpdateEsctopClientDto): Promise<EsctopClient>;
    remove(id: string): Promise<{
        success: boolean;
        esctopClient: EsctopClient;
    }>;
}
