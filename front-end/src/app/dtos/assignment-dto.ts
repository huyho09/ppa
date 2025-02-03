export interface Assignment{
    AssignmentID: number,
    EmployeeID: number,
    RemainingCapacity: number,
    Authority: string | "Proxy",
    PMOMonthlyBudget: number | null,
    PMOTotalBudget: number
}