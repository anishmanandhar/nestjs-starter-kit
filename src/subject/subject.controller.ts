import { Controller, Get, Post, Put, Delete, Param, Body, UseGuards } from '@nestjs/common';
import { SubjectService } from './subject.service';
import { Subject } from './subject.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('subjects')
//@UseGuards(AuthGuard("jwt"))
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
