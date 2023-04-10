import { Controller, Get } from '@nestjs/common';
import { ExampleService } from '';

@Controller('example')
export class ExampleController {
  constructor(private readonly exampleService: ExampleService) {}

  @Get()
  async getHello(): Promise<string> {
    return this.exampleService.getHello();
  }
}