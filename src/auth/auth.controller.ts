import { Body, Controller, Post } from '@nestjs/common';
import { LoginService } from './services/login.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/login')
  async login(@Body() loginDto: LoginDto) {
    return await this.loginService.run(loginDto);
  }
}
