import { Controller, Get } from '@nestjs/common';
import { SubjectService } from './subject.service';

@Controller('example')
export class ExampleController {
  constructor(private readonly subjectService: ExampleService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.exampleService.getHello();
  }
}