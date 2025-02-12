export interface CreateProjectRequest {
    ProjectName: string;
    ClientName: string;
    SubProjectIds?: string[];
    Team: string;
    SubTeam?: string;
    Status: string;
    CancellationReason?: string;
    PifId?: string;
    McrIdBmNumber?: string;
    ResourceGroupId?: string;
    RevenueSource?: string;
    DirectIndirect?: string;
    WorkingModel: string;
    ContractType: string;
    BillingMethod: string;
    BillingRate: number;
    ContractCurrency: string;
    TargetCurrency: string;
    ContractualPmoInPeriod: number;
    StartPeriod: string;
    EndPeriod: string;
    BillingFrequency: string;
    PoNumberSapContractNumber?: string;
    ContractNumber?: string;
    PoAmount: number;
    Remarks?: string;
}