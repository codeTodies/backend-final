import { PartialType } from '@nestjs/swagger';
import { CreateCumRapDto } from './create-cum-rap.dto';

export class UpdateCumRapDto extends PartialType(CreateCumRapDto) {}
