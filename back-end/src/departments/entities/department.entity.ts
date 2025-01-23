import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, OneToMany,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    overview: string;

    @OneToMany(() => Project, project => project.department)
    project: Project[];

    @Column('text')
    createdAt: string;
}
