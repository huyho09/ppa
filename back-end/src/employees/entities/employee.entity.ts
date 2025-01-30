import { ProjectEmployee } from "src/project-employees/entities/project-employee.entity";
import { Project } from "src/projects/entities/project.entity";
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Employee {
    @PrimaryGeneratedColumn('uuid')
    id : string

    @Column('text')
    avatar: string; 
    
    @Column('varchar',{length: 255})
    firstname: string

    @Column('varchar',{length: 255})
    lastname: string

    @Column('text')
    gender: string

    @Column('varchar',{length: 255, unique: true, nullable: false })
    email: string

    @Column('simple-array')
    skills: string[]

    @Column('text')
    role: string;

    @Column({ type: 'bit', default: false })
    is_admin: boolean;    

}
