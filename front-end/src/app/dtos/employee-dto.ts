export interface Employee {
    EmployeeID: number; // Change "Employee ID" to camelCase for consistency
    NTID: string;
    EmployeeName: string;
    DOB: string; // ISO date string format
    Gender: boolean;
    EmployeeLevel: number;
    Team: string;
    SOJoinedDate: string; // ISO date string format
    BoschJoinedDate: string; // ISO date string format
    ResourceType: string;
    TotalYearExperienceBeforeBosch: number;
    Status: string | null;
    DeactivationReason: string | null; // Optional field
    LastWorkingDate: string | null; // Optional field
    TerminationDate: string | null; // Optional field
    MaternityStartDate: string | null; // Optional field
    MaternityEndDate: string | null; // Optional field
    Remarks: string | null;
  }
  