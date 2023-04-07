import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CredcoopClient } from './entities/credcoop-client.entity';
import { Repository } from 'typeorm';
import { Loan } from 'src/loan/entities/loan.entity';

@Injectable()
export class CredcoopClientService {
  constructor(@InjectRepository(CredcoopClient) private readonly repo: Repository<CredcoopClient>){    
  }

  async create(createCredcoopClientDto: CreateCredcoopClientDto) {
    const credcoopClient = new CredcoopClient();
    Object.assign(credcoopClient, createCredcoopClientDto);
    this.repo.create(credcoopClient);
    return await this.repo.save(credcoopClient);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const credcoopClient = await this.repo.findOne({where:{id}});
    if (!credcoopClient) {
      throw new BadRequestException('Credcoop Client not found');
    }
    return credcoopClient;
  }

  async update(id: number, updateCredcoopClientDto: UpdateCredcoopClientDto) {
    return this.repo.update(id, updateCredcoopClientDto);
  }

  async remove(id: number) {
    return this.repo.delete(id);
  }
}
