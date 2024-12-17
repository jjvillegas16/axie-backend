import { IsEmail, IsString, MinLength } from 'class-validator';

export class RegisterDto {
  @IsString()
  @IsEmail()
  email: string;

  @MinLength(5)
  password: string;
}
