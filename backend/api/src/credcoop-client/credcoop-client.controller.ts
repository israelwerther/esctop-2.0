import { Controller, Get, Post, Body, Patch, Param, Delete, Query } from '@nestjs/common';
import { CredcoopClientService } from './credcoop-client.service';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';
import { CredcoopClient } from './entities/credcoop-client.entity';

@Controller('credcoop-client')
export class CredcoopClientController {
  constructor(private readonly credcoopClientService: CredcoopClientService) {}

  @Post()
  create(@Body() createCredcoopClientDto: CreateCredcoopClientDto) {
    return this.credcoopClientService.create(createCredcoopClientDto);
  }

  @Get()
  findAll(@Query('name') name?: string, @Query('cpf') cpf?: string): Promise<CredcoopClient[]> {
    return this.credcoopClientService.findAll(name, cpf);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credcoopClientService.findOne(+id);
  }

  @Get('/slug/:slug')
  findBySlug(@Param('slug') slug: string) {
    return this.credcoopClientService.findBySlug(slug);
  }

  @Patch(':slug')
  update(@Param('slug') slug: string, @Body() updateCredcoopClientDto: UpdateCredcoopClientDto) {
    return this.credcoopClientService.update(slug, updateCredcoopClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credcoopClientService.remove(+id);
  }
}
