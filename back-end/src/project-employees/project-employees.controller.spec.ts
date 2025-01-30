import { Test, TestingModule } from '@nestjs/testing';
import { ProjectEmployeesController } from './project-employees.controller';
import { ProjectEmployeesService } from './project-employees.service';

describe('ProjectEmployeesController', () => {
  let controller: ProjectEmployeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProjectEmployeesController],
      providers: [ProjectEmployeesService],
    }).compile();

    controller = module.get<ProjectEmployeesController>(ProjectEmployeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
