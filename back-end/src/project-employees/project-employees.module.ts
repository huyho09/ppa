import { Module } from '@nestjs/common';
import { ProjectEmployeesService } from './project-employees.service';
import { ProjectEmployeesController } from './project-employees.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProjectEmployee } from './entities/project-employee.entity';
import { Project } from 'src/projects/entities/project.entity';
import { Employee } from 'src/employees/entities/employee.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProjectEmployee,Project,Employee])],
  controllers: [ProjectEmployeesController],
  providers: [ProjectEmployeesService],
})
export class ProjectEmployeesModule {}
