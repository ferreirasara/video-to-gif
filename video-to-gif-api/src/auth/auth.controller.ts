import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/user/dto/create-user.dto';

@Controller()
export class AuthController {
  constructor(private authService: AuthService) { }

  @Post('auth/login')
  async login(@Body() body: { username: string, password: string }) {
    return this.authService.login(body.username, body.password);
  }

  @Post('auth/signup')
  async signup(@Body() body: CreateUserDto) {
    return this.authService.signup(body);
  }
}