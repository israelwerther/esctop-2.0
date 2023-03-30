import { PartialType } from '@nestjs/mapped-types';
import { CreateEsctopClientDto } from './create-esctop-client.dto';

export class UpdateEsctopClientDto extends PartialType(CreateEsctopClientDto) {}
