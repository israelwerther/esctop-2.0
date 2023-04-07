import { CredcoopClientService } from './credcoop-client.service';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
export declare class CredcoopClientController {
    private readonly credcoopClientService;
    constructor(credcoopClientService: CredcoopClientService);
    create(createCredcoopClientDto: CreateCredcoopClientDto): Promise<import("./entities/credcoop-client.entity").CredcoopClient>;
    findAll(): Promise<import("./entities/credcoop-client.entity").CredcoopClient[]>;
    findOne(id: string): Promise<import("./entities/credcoop-client.entity").CredcoopClient>;
    update(id: string, updateCredcoopClientDto: UpdateCredcoopClientDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<import("typeorm").DeleteResult>;
}
