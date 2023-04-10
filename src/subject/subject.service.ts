import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Subject } from './subject.entity';

/**
 * @author Anish
 */
@Injectable()
export class SubjectService {
  constructor(
    @InjectRepository(Subject)
    private readonly subjectRepository: Repository<Subject>,
  ) {}

  async findAll(): Promise<Subject[]> {
    return this.subjectRepository.find();
  }

  async findOne(id: number): Promise<Subject> {
    return null;
  }

  async create(subject: Subject): Promise<Subject> {
    return this.subjectRepository.save(subject);
  }

  async update(id: number, subject: Subject): Promise<Subject> {
    await this.subjectRepository.update(id, subject);
    return null;
  }

  async delete(id: number): Promise<void> {
    await this.subjectRepository.delete(id);
  }
}
