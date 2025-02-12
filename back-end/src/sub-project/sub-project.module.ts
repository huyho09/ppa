import { Module } from '@nestjs/common';
import { SubProjectService } from './sub-project.service';
import { SubProjectController } from './sub-project.controller';

@Module({
  controllers: [SubProjectController],
  providers: [SubProjectService]
})
export class SubProjectModule {}
