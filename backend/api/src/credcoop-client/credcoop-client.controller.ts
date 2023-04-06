import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CredcoopClientService } from './credcoop-client.service';
import { CreateCredcoopClientDto } from './dto/create-credcoop-client.dto';
import { UpdateCredcoopClientDto } from './dto/update-credcoop-client.dto';

@Controller('credcoop-client')
export class CredcoopClientController {
  constructor(private readonly credcoopClientService: CredcoopClientService) {}

  @Post()
  create(@Body() createCredcoopClientDto: CreateCredcoopClientDto) {
    return this.credcoopClientService.create(createCredcoopClientDto);
  }

  @Get()
  findAll() {
    return this.credcoopClientService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.credcoopClientService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCredcoopClientDto: UpdateCredcoopClientDto) {
    return this.credcoopClientService.update(+id, updateCredcoopClientDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.credcoopClientService.remove(+id);
  }
}
