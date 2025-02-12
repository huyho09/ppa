import {
    IsString, IsNotEmpty, IsNumber, IsOptional,
    IsDate, IsArray, ArrayNotEmpty, IsUUID, Matches
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateProjectDto {
    @ApiProperty({ description: 'The name of the project', example: 'Project1' })
    @IsNotEmpty()
    @IsString()
    ProjectName: string;

    @ApiProperty({ description: 'The name of the client', example: 'Client 1' })
    @IsNotEmpty()
    @IsString()
    ClientName: string;

    @ApiProperty({ description: 'List of SubProject IDs', example: [], required: false })
    @IsOptional()
    @IsArray()
    @IsUUID('4', { each: true })
    SubProjectIds?: string[];

    @ApiProperty({ description: 'The team assigned to the project', example: 'Team 1' })
    @IsNotEmpty()
    @IsString()
    Team: string;

    @ApiProperty({ description: 'The sub-team assigned to the project', example: 'SubTeam A', required: false })
    @IsOptional()
    @IsString()
    SubTeam?: string;

    @ApiProperty({ description: 'Status of the project', example: 'Won' })
    @IsNotEmpty()
    @IsString()
    Status: string;

    @ApiProperty({ description: 'Reason for cancellation (if applicable)', required: false })
    @IsOptional()
    @IsString()
    CancellationReason?: string;

    @ApiProperty({ description: 'PIF ID (if applicable)', required: false })
    @IsOptional()
    @IsString()
    PifId?: string;

    @ApiProperty({ description: 'MCR ID or BM Number', required: false })
    @IsOptional()
    @IsString()
    McrIdBmNumber?: string;

    @ApiProperty({ description: 'Resource group ID (if applicable)', required: false })
    @IsOptional()
    @IsString()
    ResourceGroupId?: string;

    @ApiProperty({ description: 'Revenue source (if applicable)', required: false })
    @IsOptional()
    @IsString()
    RevenueSource?: string;

    @ApiProperty({ description: 'Direct or Indirect', required: false })
    @IsOptional()
    @IsString()
    DirectIndirect?: string;

    @ApiProperty({ description: 'The working model for the project', example: 'Onsite' })
    @IsNotEmpty()
    @IsString()
    WorkingModel: string;

    @ApiProperty({ description: 'The type of contract', example: 'Service based (YEB)' })
    @IsNotEmpty()
    @IsString()
    ContractType: string;

    @ApiProperty({ description: 'The method of billing', example: 'Email' })
    @IsNotEmpty()
    @IsString()
    BillingMethod: string;

    @ApiProperty({ description: 'The billing rate for the project', example: 100 })
    @IsNotEmpty()
    @IsNumber({}, { message: 'Billing rate must be a number' })
    BillingRate: number;

    @ApiProperty({ description: 'The currency used in the contract', example: 'EUR' })
    @IsNotEmpty()
    @IsString()
    ContractCurrency: string;

    @ApiProperty({ description: 'The target currency for billing', example: 'EUR' })
    @IsNotEmpty()
    @IsString()
    TargetCurrency: string;

    @ApiProperty({ description: 'Contractual PMO in period', example: 0 })
    @IsNotEmpty()
    @IsNumber()
    ContractualPmoInPeriod: number;

    @ApiProperty({ description: 'Start period of the project', example: '2025-01-10', type: String })
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'StartPeriod must be in YYYY-MM-DD format' })
    StartPeriod: string;

    @ApiProperty({ description: 'End period of the project', example: '2026-01-10', type: String })
    @IsNotEmpty()
    @IsString()
    @Matches(/^\d{4}-\d{2}-\d{2}$/, { message: 'EndPeriod must be in YYYY-MM-DD format' })
    EndPeriod: string;

    @ApiProperty({ description: 'The frequency of billing', example: 'Monthly' })
    @IsNotEmpty()
    @IsString()
    BillingFrequency: string;

    @ApiProperty({ description: 'PO number or SAP contract number', required: false })
    @IsOptional()
    @IsString()
    PoNumberSapContractNumber?: string;

    @ApiProperty({ description: 'The contract number', required: false })
    @IsOptional()
    @IsString()
    ContractNumber?: string;

    @ApiProperty({ description: 'PO amount for the project', example: 1000 })
    @IsNotEmpty()
    @IsNumber({}, { message: 'PO Amount must be a number' })
    PoAmount: number;

    @ApiProperty({ description: 'Additional remarks for the project', required: false })
    @IsOptional()
    @IsString()
    Remarks?: string;
}
