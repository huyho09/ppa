// src/project/project.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Project } from './entities/project.entity';
import { SubProject } from '../sub-project/entities/sub-project.entity';  // Import SubProject entity
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';

@Module({
  imports: [
    TypeOrmModule.forFeature([Project, SubProject]),  // Register both entities
  ],
  providers: [ProjectService],
  controllers: [ProjectController],
})
export class ProjectModule {}
