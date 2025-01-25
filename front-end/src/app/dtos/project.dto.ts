export interface Project {
    ProjectID: number,
    ProjectName: string | null,
    ClientName: string | null,
    SubProjectName: string | null,
    Team: string | null,
    SubTeam: string | null,
    Status: ProjectStatusEnum | null,
    CancellationReason: string | null,
    PIF_ID: string | null,
    MCR_ID_BM_Number: string | null,
    ResourceGroup_ID: string | null,
    RevenueSource: string | null,
    Direct_Indirect: string | null,
    WorkingModel: WorkingModelEnum | null,
    ContractType: ContractTypeEnum | null,
    BillingMethod: BillingMethodEnum | null,
    BillingRate: number | null,
    ContractCurrency: string | null,
    TargetCurrency: string | null,
    Contractual_PMO_In_Period: number | null,
    StartPeriod: string | null,
    EndPeriod: string | null,
    BillingFrequency: BillingFrequencyEnum | null,
    PONumber_SAPContractNumber: string | null,
    ContractNumber: string | null,
    PO_Amount: number | null,
    Remarks: string | null,
}

export enum ProjectStatusEnum {
    "In Contact" = "In Contact",
    "Proposing" = "Proposing",
    "Won" = "Won",
    "Lost/Cancel" = "Lost/Cancel"
}

export enum WorkingModelEnum {
    "Onsite" = "Onsite",
    "Offshore" = "Offshore",
    "Nearshore" = "Nearshore",
}

export enum ContractTypeEnum {
    "T&M (YE4)" = "T&M (YE4)",
    "Service based (YEB)" = "Service based (YEB)",
}

export enum BillingMethodEnum {
    "Email" = "Email",
    "Call" = "Call"
}

export enum BillingFrequencyEnum {
    "Quarterly" = "Quarterly",
    "Monthly" = "Monthly",
    "One time" = "One time",
}