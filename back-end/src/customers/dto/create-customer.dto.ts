import {IsString, IsArray} from 'class-validator'
export class CreateCustomerDto {
    
    @IsString()
    firstname: string;

    @IsString()
    lastname: string

    @IsString()
    email: string;

    @IsArray()
    projectIds: number[];

}
