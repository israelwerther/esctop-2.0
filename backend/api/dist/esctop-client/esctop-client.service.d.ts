import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
export declare class EsctopClientService {
    create(createEsctopClientDto: CreateEsctopClientDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateEsctopClientDto: UpdateEsctopClientDto): string;
    remove(id: number): string;
}
