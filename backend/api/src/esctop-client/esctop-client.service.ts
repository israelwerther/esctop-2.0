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
    const slug = createEsctopClientDto.corporateName.split(" ").join('_').toLowerCase();
    return await this.repo.insert({ ...createEsctopClientDto, slug });
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

















// async create(createEsctopClientDto: CreateEsctopClientDto) {
//   for (let i = 0; i < 5; i++) {
//     const createEsctopClientDto: CreateEsctopClientDto = {
//       corporateName: "Teste " + (i + 1),
//       fantasyName: "Teste " + (i + 1),
//       cnpj: "Teste " + (i + 1),
//       foundation: new Date("2023-03-28 21:01:28"),
//       stateRegistration: "Teste " + (i + 1),
//       municipalRegistration: "Teste " + (i + 1),
//     };
//     console.log("Criou = ", createEsctopClientDto);
//     const slug = createEsctopClientDto.corporateName.split(" ").join("_").toLowerCase();
//     await this.repo.insert({ ...createEsctopClientDto, slug });
//   }
// }