import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { SubjectModule } from './subject/Subject.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env'],
    }),
    SubjectModule,
  ],
})
export class AppModule {}
