export interface SubProject {
    SubProjectID: number,
    StartTime: string | null,
    EndTime: string | null,
    ProjectID: number,
    AssignmentIDs?: number[],
    RequirementIDs?: number[]
}