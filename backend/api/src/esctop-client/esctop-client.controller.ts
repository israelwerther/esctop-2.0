import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EsctopClientService } from './esctop-client.service';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';

@Controller('esctop-client')
export class EsctopClientController {
  constructor(private readonly esctopClientService: EsctopClientService) {}

  @Post()
  create(@Body() createEsctopClientDto: CreateEsctopClientDto) {
    return this.esctopClientService.create(createEsctopClientDto);
  }

  @Get()
  findAll() {
    return this.esctopClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.esctopClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEsctopClientDto: UpdateEsctopClientDto) {
    return this.esctopClientService.update(+id, updateEsctopClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.esctopClientService.remove(+id);
  }
}
