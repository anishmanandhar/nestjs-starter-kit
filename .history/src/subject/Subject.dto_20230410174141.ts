import { IsString } from 'class-validator';

export class ExampleDto {
  @IsString()
  readonly name: string;
}