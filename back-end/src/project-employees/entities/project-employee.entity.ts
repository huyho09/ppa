import { Project } from 'src/projects/entities/project.entity';
import { Employee } from 'src/employees/entities/employee.entity';
import { Column, Entity, PrimaryGeneratedColumn, CreateDateColumn, OneToOne, OneToMany, JoinColumn, ManyToMany, JoinTable, ManyToOne} from 'typeorm';

@Entity()
export class ProjectEmployee {

    @PrimaryGeneratedColumn()
    id: number ; 

    @ManyToOne(() => Project, (project) => project.projectEmployees, { onDelete: 'CASCADE' })
    project: Project;

    @ManyToOne(() => Employee)
    @JoinColumn()
    employee:  Employee

    @Column('text')
    role_in_project: string;

    @Column({ type: 'decimal', precision: 2, scale: 1 })
    effort: number;

    @Column('text')
    task: string;

}

