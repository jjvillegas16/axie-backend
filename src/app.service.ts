import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  hello(param: string): string {
    console.log(param);
    return 'Hello asd!';
  }
}
