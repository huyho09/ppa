import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column('text', { nullable: true })
    avatar: string;

    @Column('varchar', { length: 255 })
    firstname: string

    @Column('varchar', { length: 255 })
    lastname: string

    @Column('text')
    gender: string

    @Column('varchar', { length: 255, unique: true, nullable: false })
    email: string

    @Column('simple-array')
    skills: string[]

    @Column('text')
    role: string;

    @Column('text', { nullable: true })
    aboutMe: string;

    @Column({ type: 'bit', default: false })
    is_admin: boolean;

    @Column('text')
    password: string;

    @Column('text')
    team: string;

    @Column('int')
    level: number;

    @Column('date')
    so_join_date: string;

    @Column('date')
    bosch_join_date: string;

    @Column('text')
    resource_type: string;

    @Column('int')
    total_year_experience: number;

    @Column('text')
    status: string;

    @Column('text')
    deactivation_reason: string;

    @Column('date')
    last_work_date: string;

    @Column('date')
    termination_date: string;

    @Column('date')
    maternity_start_date: string;

    @Column('date')
    maternity_end_date: string;

    @Column('text')
    remarks: string;
}
