import { Test, TestingModule } from '@nestjs/testing';
import { SubProjectService } from './sub-project.service';

describe('SubProjectService', () => {
  let service: SubProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubProjectService],
    }).compile();

    service = module.get<SubProjectService>(SubProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
