import { IsString } from "class-validator";

export class SubjectDto {
  @IsString()
  readonly name: string;
}