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

  async findAll(corporateName?: string) {
    const queryBuilder = this.repo.createQueryBuilder('esctopClient');

    if (corporateName) {
      queryBuilder.andWhere('esctopClient.corporateName LIKE :corporateName', { corporateName: `%${corporateName}%` });
    }

    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const esctopClient = await this.repo.findOne({where: {id}});
    if(!esctopClient){
      throw new BadRequestException('Client esctop not found');
    }
    return esctopClient;
  }

  async findBySlug(slug: string) {
    try {
      const esctopClient = await this.repo.findOneOrFail({where:{slug}});
      return esctopClient;
    } catch (err) {
      throw new BadRequestException(`Esctop Client with slug ${slug} not found`);
    }
  }

  async update(slug: string,updateEsctopClientDto: UpdateEsctopClientDto) {
    const esctopClient = await this.repo.findOne({where:{slug}});
    
  }

  async remove(id: number) {
    return await this.repo.delete(id);
  }
}
