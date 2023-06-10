import { ApiProperty } from '@nestjs/swagger';
import { IsInt, IsString } from 'class-validator';

export class CreateDemoDto {
  @ApiProperty({
    example: 'John Doe',
    description: 'The name of the person',
    required: true,
  })
  @IsString()
  readonly name: string;

  @ApiProperty({
    example: 25,
    description: 'The age of the person',
    required: true,
  })
  @IsInt()
  readonly age: number;

  @ApiProperty({
    example: 'Male',
    description: 'The gender of the person',
    required: true,
  })
  @IsString()
  readonly gender: string;

  @ApiProperty({
    example: 'johndoe@example.com',
    description: 'The email address of the person',
    required: true,
  })
  @IsString()
  readonly email: string;
}