import { Injectable } from '@nestjs/common';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';

@Injectable()
export class EsctopClientService {
  create(createEsctopClientDto: CreateEsctopClientDto) {
    return 'This action adds a new esctopClient';
  }

  findAll() {
    return `This action returns all esctopClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} esctopClient`;
  }

  update(id: number, updateEsctopClientDto: UpdateEsctopClientDto) {
    return `This action updates a #${id} esctopClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} esctopClient`;
  }
}
