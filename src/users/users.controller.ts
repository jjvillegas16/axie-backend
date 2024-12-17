import { Body, Controller, Post } from '@nestjs/common';
import { RegisterDto } from './dtos/register.dto';
import { RegisterService } from './services/register.service';

@Controller('users')
export class UsersController {
  constructor(private readonly registerService: RegisterService) {}

  // TODO: Create @AuthenticatedUser
  @Post('/register')
  async register(@Body() registerDto: RegisterDto) {
    return await this.registerService.run(registerDto);
  }
}
