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

  async findAll(name?: string, cpf?: string): Promise<CredcoopClient[]> {
    const queryBuilder = this.repo.createQueryBuilder('credcoopClient');
  
    if (name) {
      queryBuilder.andWhere('credcoopClient.name LIKE :name', { name: `%${name}%` });
    }
  
    if (cpf) {
      queryBuilder.andWhere('credcoopClient.cpf = :cpf', { cpf });
    }
  
    return await queryBuilder.getMany();
  }

  async findOne(id: number) {
    const credcoopClient = await this.repo.findOne({where:{id}});
    if (!credcoopClient) {
      throw new BadRequestException('Credcoop Client not found');
    }
    return credcoopClient;
  }

  async findBySlug(slug: string) {
    console.log(`here 1 ${slug}`)
    try {
      const credcoopClient = await this.repo.findOneOrFail({where:{slug}});
      return credcoopClient;
    } catch (err) {
      console.log("here 2")
      throw new BadRequestException(`Credcoop Client with slug ${slug} not found`);
    }
  }

  async update(slug: string, updateCredcoopClientDto: UpdateCredcoopClientDto) {
    const credcoopClient = await this.repo.findOne({where:{slug}});

    if (!credcoopClient) {
      throw new BadRequestException("credcoopClient not found");
    }

    credcoopClient.modifiedOn = new Date(Date.now());
    Object.assign(credcoopClient, updateCredcoopClientDto);
    return this.repo.save(credcoopClient);
  }

  async remove(id: number) {
    const credcoopClient = await this.repo.findOne({where:{id}});

    if (!credcoopClient) {
      throw new BadRequestException("Credcoop Client not found");
    }

    await this.repo.remove(credcoopClient);
    return {success: true, credcoopClient};
  }
}
