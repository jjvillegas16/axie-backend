import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { RegisterDto } from '../dtos/register.dto';
import { User } from '../schemas/user.schema';
import { hash } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class RegisterService {
  constructor(
    private readonly configService: ConfigService,
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) {}

  public async run({ email, password }: RegisterDto) {
    const hashedPassword = await hash(
      password,
      Number(this.configService.get('auth.bcrypt_rounds')),
    );

    const newUser = new this.userModel({
      email,
      password: hashedPassword,
    });
    await newUser.save();

    return newUser;
  }
}
