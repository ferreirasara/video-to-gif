import { Injectable, UnauthorizedException } from '@nestjs/common';
import { compare } from 'bcrypt';
import { CreateUserDto } from 'src/user/dto/create-user.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UserService,
  ) { }

  async login(username: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Invalid username or password');
    }
    if (compare(password, user.password)) {
      return {
        userId: user.id
      };
    }
    throw new UnauthorizedException('Invalid username or password');
  }

  async signup(createUserDto: CreateUserDto): Promise<any> {
    return this.usersService.create(createUserDto);
  }
}