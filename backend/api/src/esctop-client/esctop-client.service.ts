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
    console.log("============", createEsctopClientDto)
    const slug = createEsctopClientDto.corporateName.split(" ").join('_').toLowerCase();
    return await this.repo.insert({ ...createEsctopClientDto, slug });
  }

  async findAll() {
    return await this.repo.find();
  }

  async findOne(id: number) {
    const post = await this.repo.findOne({where: {id}});
    if(!post){
      throw new BadRequestException('Post not found');
    }
    return post;
  }

  async update(id: number, updateEsctopClientDto: UpdateEsctopClientDto) {
    return await this.repo.update(id, updateEsctopClientDto);
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }
}
