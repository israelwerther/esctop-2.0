import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
import { EsctopClient } from './entities/esctop-client.entity';

@Injectable()
export class EsctopClientService {
  constructor(@InjectRepository(EsctopClient) private readonly repo: Repository<EsctopClient>){    
  }

  async create(createEsctopClientDto: CreateEsctopClientDto) {
    const esctopClient = new EsctopClient();
    Object.assign(esctopClient, createEsctopClientDto);
    this.repo.create(esctopClient);
    return await this.repo.save(esctopClient);
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const esctopClient = await this.repo.findOne({where: {id}});
    if(!esctopClient){
      throw new BadRequestException('Client esctop not found');
    }
    return esctopClient;
  }

  async update(id: number, updateEsctopClientDto: UpdateEsctopClientDto) {
    return await this.repo.update(id, updateEsctopClientDto);
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }
}
