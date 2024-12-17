import { JwtService } from '@nestjs/jwt';
import { User } from '../../users/schemas/user.schema';
import { UnauthorizedException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { compare } from 'bcrypt';
import { Model } from 'mongoose';
import { LoginDto } from '../dto/login.dto';

export class LoginService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
    private readonly jwtService: JwtService,
  ) {}

  public async run({ email, password }: LoginDto) {
    const user = await this.userModel.findOne({ email });

    const errorMsg = 'You have entered incorrect email or password';
    if (!user) {
      throw new UnauthorizedException(errorMsg);
    }

    const isPasswordCorrect = await compare(password, user.password);
    if (!isPasswordCorrect) {
      throw new UnauthorizedException(errorMsg);
    }

    const payload = { email: user.email, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
