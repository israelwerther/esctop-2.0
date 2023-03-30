import { EsctopClientService } from './esctop-client.service';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
export declare class EsctopClientController {
    private readonly esctopClientService;
    constructor(esctopClientService: EsctopClientService);
    create(createEsctopClientDto: CreateEsctopClientDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateEsctopClientDto: UpdateEsctopClientDto): string;
    remove(id: string): string;
}
