import {IsString, IsArray, IsDate} from 'class-validator'
export class CreateDepartmentDto {
    
    @IsString()
    name: string;

    @IsString()
    overview: string;

    @IsArray()
    projectIds: number[];

    @IsString()
    createAt: string;
}
