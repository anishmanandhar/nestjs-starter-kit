import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('example')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.subjectService.getHello();
  }
}