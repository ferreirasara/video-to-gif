import { IsNotEmpty, IsEmail } from 'class-validator';

export class CreateUserDto {
  @IsNotEmpty({ message: 'Provide a username' })
  username: string;

  @IsNotEmpty({ message: 'Provide a email' })
  @IsEmail({}, { message: 'Provide a valid email' })
  email: string;

  @IsNotEmpty({ message: 'Provide a password' })
  password: string;
}
