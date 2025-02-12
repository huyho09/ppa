import { Test, TestingModule } from '@nestjs/testing';
import { SubProjectController } from './sub-project.controller';

describe('SubProjectController', () => {
  let controller: SubProjectController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubProjectController],
    }).compile();

    controller = module.get<SubProjectController>(SubProjectController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
