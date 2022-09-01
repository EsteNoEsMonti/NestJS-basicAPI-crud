import { IsNotEmpty, IsNumber, IsPositive, IsString, Max, Min } from 'class-validator';

export class CreateBookDto {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  author: string;

  @IsNumber()
  @IsPositive()
  @Min(1)
  @Max(5000)
  size: number;
}