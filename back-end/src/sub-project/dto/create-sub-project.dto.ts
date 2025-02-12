// src/sub-project/dto/create-sub-project.dto.ts
import { IsDate, IsNotEmpty, IsNumber, IsArray } from 'class-validator';

export class CreateSubProjectDto {
    @IsNotEmpty()
    @IsDate()
    StartTime: Date;

    @IsNotEmpty()
    @IsDate()
    EndTime: Date;

    @IsNotEmpty()
    @IsNumber()
    ProjectID: number;

    @IsArray()
    AssignmentIDs: number[];

    @IsArray()
    RequirementIDs: number[];
}
