import { CONFIGURABLE_MODULE_ID } from "@nestjs/common/module-utils/constants";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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

    @Column('text',{nullable: true})
    aboutMe: string;

    @Column({ type: 'bit', default: false })
    is_admin: boolean;    

    @Column('text')
    password: string;  
}
