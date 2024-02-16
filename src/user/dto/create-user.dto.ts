import { IsNotEmpty, IsEmail, IsStrongPassword, } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Provide a username' })
  username: string;

  @IsNotEmpty({ message: 'Provide a email' })
  @IsEmail({}, { message: 'Provide a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Provide a password' })
  @IsStrongPassword({ minLength: 8 }, { message: 'Password must be at least 8 characters long' })
  password: string;
}
