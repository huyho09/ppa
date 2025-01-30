import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, OneToMany,OneToOne,PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Department {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    name: string;

    @Column('text')
    overview: string;

    @Column('text')
    createdAt: string;
}
