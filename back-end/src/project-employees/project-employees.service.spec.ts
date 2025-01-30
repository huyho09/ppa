import { Test, TestingModule } from '@nestjs/testing';
import { ProjectEmployeesService } from './project-employees.service';

describe('ProjectEmployeesService', () => {
  let service: ProjectEmployeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectEmployeesService],
    }).compile();

    service = module.get<ProjectEmployeesService>(ProjectEmployeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
