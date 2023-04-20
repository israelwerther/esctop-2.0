import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { EsctopClientService } from './esctop-client.service';
import { CreateEsctopClientDto } from './dto/create-esctop-client.dto';
import { UpdateEsctopClientDto } from './dto/update-esctop-client.dto';
import { EsctopClient } from './entities/esctop-client.entity';

@Controller('esctop-client')
export class EsctopClientController {
  constructor(private readonly esctopClientService: EsctopClientService) {}

  @Post()
  create(@Body() createEsctopClientDto: CreateEsctopClientDto) {
    return this.esctopClientService.create(createEsctopClientDto);
  }

  @Get()
  findAll(@Query('corporateName') corporateName?: string): Promise<EsctopClient[]> {
    return this.esctopClientService.findAll(corporateName);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.esctopClientService.findOne(+id);
  }

  @Get('/slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.esctopClientService.findBySlug(slug);
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
