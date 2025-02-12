import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text', { nullable: true })
    avatar: string;

    @Column('varchar', { length: 255 })
    employeeName: string

    @Column({ type: 'bit', default: false })
    gender: boolean

    @Column('varchar', { length: 255, unique: true, nullable: false })
    email: string

    @Column('simple-array')
    skills: string[]

    @Column('text')
    role: string;

    @Column({ type: 'bit', default: false })
    is_admin: boolean;

    @Column('text')
    password: string;

    @Column('text')
    team: string;

    @Column('int')
    level: number;

    @Column('date')
    so_join_date: Date;

    @Column('date')
    bosch_join_date: Date;

    @Column('text')
    resource_type: string;

    @Column('int')
    total_year_experience: number;

    @Column('text')
    status: string;

    @Column('text')
    deactivation_reason: string;

    @Column('date')
    last_work_date: Date;

    @Column('date')
    termination_date: Date;

    @Column('date')
    maternity_start_date: Date;

    @Column('date')
    maternity_end_date: Date;

    @Column('text')
    remarks: string;
}
