import { BadRequestException, Injectable } from '@nestjs/common';
import { GetAxieDto } from '../dtos/get-axie.dto';
import { InfuraService } from './infura.service';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class GetAxieService extends InfuraService {
  constructor(protected configService: ConfigService) {
    super(configService);
  }

  public async run({ id }: GetAxieDto) {
    try {
      const response = (await this.contract.methods
        .getAxie(id)
        .call({ from: this.signer.address })) as { [key: number]: bigint };

      return {
        'Genes (Bigint):': Number(response[0]),
        'Born at (Bigint)': Number(response[1]),
      };
    } catch {
      throw new BadRequestException(
        'Check the axie ID if there are any errors',
      );
    }
  }
}
