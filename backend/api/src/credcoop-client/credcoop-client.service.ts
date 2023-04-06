import { Injectable } from '@nestjs/common';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';

@Injectable()
export class CredcoopClientService {
  create(createCredcoopClientDto: CreateCredcoopClientDto) {
    return 'This action adds a new credcoopClient';
  }

  findAll() {
    return `This action returns all credcoopClient`;
  }

  findOne(id: number) {
    return `This action returns a #${id} credcoopClient`;
  }

  update(id: number, updateCredcoopClientDto: UpdateCredcoopClientDto) {
    return `This action updates a #${id} credcoopClient`;
  }

  remove(id: number) {
    return `This action removes a #${id} credcoopClient`;
  }
}
