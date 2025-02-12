import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Project } from './entities/project.entity';
import { CreateProjectDto } from './dto/create-project.dto';

@Injectable()
export class ProjectService {
    constructor(
        @InjectRepository(Project)
        private readonly projectRepository: Repository<Project>,
    ) {}

    async createProject(createProjectDto: CreateProjectDto): Promise<Project> {
        const newProject = this.projectRepository.create(createProjectDto);
        return this.projectRepository.save(newProject);
    }
}
