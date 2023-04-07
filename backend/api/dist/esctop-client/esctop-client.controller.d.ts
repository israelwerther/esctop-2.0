import { EsctopClientService } from './esctop-client.service';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
export declare class EsctopClientController {
    private readonly esctopClientService;
    constructor(esctopClientService: EsctopClientService);
    create(createEsctopClientDto: CreateEsctopClientDto): Promise<import("./entities/esctop-client.entity").EsctopClient>;
    findAll(): Promise<import("./entities/esctop-client.entity").EsctopClient[]>;
    findOne(id: string): Promise<import("./entities/esctop-client.entity").EsctopClient>;
    update(id: string, updateEsctopClientDto: UpdateEsctopClientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
