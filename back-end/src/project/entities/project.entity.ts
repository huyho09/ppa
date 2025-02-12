// src/project/entities/project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { SubProject } from '../../sub-project/entities/sub-project.entity';

@Entity()
export class Project {
    @PrimaryGeneratedColumn('uuid')
    ProjectID: string;

    @Column()
    ProjectName: string;

    @Column()
    ClientName: string;

    @OneToMany(() => SubProject, (subProject) => subProject.Project)
    SubProjects: SubProject[];

    @Column()
    Team: string;

    @Column({ nullable: true })
    SubTeam: string;

    @Column()
    Status: string;

    @Column({ nullable: true })
    CancellationReason: string;

    @Column({ nullable: true })
    PIF_ID: string;

    @Column({ nullable: true })
    MCR_ID_BM_Number: string;

    @Column({ nullable: true })
    ResourceGroup_ID: string;

    @Column({ nullable: true })
    RevenueSource: string;

    @Column({ nullable: true })
    Direct_Indirect: string;

    @Column()
    WorkingModel: string;

    @Column()
    ContractType: string;

    @Column()
    BillingMethod: string;

    @Column('decimal')
    BillingRate: number;

    @Column()
    ContractCurrency: string;

    @Column()
    TargetCurrency: string;

    @Column('decimal', { default: 0 })
    Contractual_PMO_In_Period: number;

    @Column({ type: 'date' })
    StartPeriod: Date;

    @Column({ type: 'date' })
    EndPeriod: Date;

    @Column()
    BillingFrequency: string;

    @Column({ nullable: true })
    PONumber_SAPContractNumber: string;

    @Column({ nullable: true })
    ContractNumber: string;

    @Column('decimal')
    PO_Amount: number;

    @Column({ nullable: true })
    Remarks: string;
}
