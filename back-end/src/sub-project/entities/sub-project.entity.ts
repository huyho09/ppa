// src/sub-project/entities/sub_project.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Project } from '../../project/entities/project.entity';

@Entity()
export class SubProject {
    @PrimaryGeneratedColumn('uuid')
    SubProjectID: string;

    @Column({ type: 'date' })
    StartTime: Date;

    @Column({ type: 'date' })
    EndTime: Date;

    @ManyToOne(() => Project, (project) => project.SubProjects, { onDelete: 'CASCADE' })
    @JoinColumn({ name: 'ProjectID' })
    Project: Project;

    @Column('simple-array')
    AssignmentIDs: number[];

    @Column('simple-array')
    RequirementIDs: number[];
}
