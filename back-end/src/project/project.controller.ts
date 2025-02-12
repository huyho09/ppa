import { Controller, Post, Body } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ApiTags, ApiOperation } from '@nestjs/swagger';
import { CreateProjectDto } from './dto/create-project.dto';

@ApiTags('projects') 
@Controller('project')
export class ProjectController {
    constructor(private readonly projectService: ProjectService) { }

    @Post('create')
    @ApiOperation({ summary: 'Create a new project' })
    async create(@Body() createProjectDto: CreateProjectDto) {
        return this.projectService.createProject(createProjectDto);
    }
}
