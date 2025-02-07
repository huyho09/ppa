export interface Assignment{
    AssignmentID: number,
    EmployeeID: number,
    EmployeeName?: string,
    RemainingCapacity: number,
    Authority: string | "Proxy",
    PMOMonthlyBudget: number | null,
    PMOTotalBudget: number
}