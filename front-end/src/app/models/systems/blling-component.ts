export interface BillingComponentDAL {
    TableCalcPMO: TableData
    TableCalcBilling: TableData
}

export interface TableData {
    GroupColumns: GroupColumn[],
    ColumnHeadings: ColumnValue[],
}

export interface ColumnValue {
    Colspan?: number,
    Rowspan?: number,
    Label?: string
}

export interface GroupColumn extends ColumnValue {
    ChildrenIndexs?: number []
}