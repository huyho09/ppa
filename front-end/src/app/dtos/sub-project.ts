import { Assignment } from "./assignment-dto";
import { Requirement } from "./requirement-dto";

export interface SubProject {
    SubProjectID: number,
    StartTime: string | null,
    EndTime: string | null,
    ProjectID: number,
    AssignmentIDs?: number[],
    Assignments?: Assignment[],
    RequirementIDs?: number[]
    Requirements?: Requirement[]
}