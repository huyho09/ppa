// src/sub-project/dto/update-sub-project.dto.ts
import { PartialType } from '@nestjs/mapped-types';
import { CreateSubProjectDto } from './create-sub-project.dto';

export class UpdateSubProjectDto extends PartialType(CreateSubProjectDto) {}
