import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';

@Controller('subjects')
export class SubjectController {
  constructor(private readonly subjectService: SubjectService) {}

  @Get()
  async findAll(): Promise<Subject[]> {
    return this.subjectService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Subject> {
    return this.subjectService.findOne(parseInt(id));
  }

  @Post()
  async create(@Body() subject: Subject): Promise<Subject> {
    return this.subjectService.create(subject);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() subject: Subject): Promise<Subject> {
    return this.subjectService.update(parseInt(id), subject);
  }

  @Delete(':id')
  async delete(@Param('id') id: string): Promise<void> {
    return this.subjectService.delete(parseInt(id));
  }
}
