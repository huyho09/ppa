import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
@Entity()

export class Customer {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('text')
    avatar: string;
    
    @Column('text')
    firstname: string;

    @Column('text')
    lastname: string;
    
    @Column('text')
    gender: string;

    @Column('varchar',{length: 255, unique: true })
    email: string;

    @OneToMany(() => Project, project => project.customer)
    project: Project[];
}
