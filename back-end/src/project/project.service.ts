import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';
import { SubProject } from 'src/sub-project/entities/sub-project.entity';
import { Logger } from '@nestjs/common';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
        @InjectRepository(SubProject)
        private readonly subProjectRepository: Repository<SubProject>,
    ) {}

    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        const logger = new Logger(ProjectService.name);  // Initialize logger

        // Log the incoming data (CreateProjectDto)
        logger.log('Creating project with DTO:', createProjectDto);
    
        // Fetch SubProject entities by the provided SubProject IDs
        const subProjects = createProjectDto.SubProjectIds
            ? await this.subProjectRepository.findByIds(createProjectDto.SubProjectIds)
            : [];
    
        // Create a new Project entity with the provided data
        const newProject = this.projectRepository.create({
            ...createProjectDto,
            StartPeriod: new Date(createProjectDto.StartPeriod),
            EndPeriod: new Date(createProjectDto.EndPeriod),
            BillingRate: Number(createProjectDto.BillingRate),
            Contractual_PMO_In_Period: Number(createProjectDto.ContractualPmoInPeriod),
            PO_Amount: Number(createProjectDto.PoAmount),
            SubProjects: subProjects,
        });
    
        // Save and return the newly created Project entity
        return this.projectRepository.save(newProject);
    }
    
    
}
