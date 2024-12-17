import { ConfigService } from '@nestjs/config';
import Web3, { Contract, Web3Account } from 'web3';
import { contractAbi } from '../constants/contract-abi';

export class InfuraService {
  protected web3: Web3;
  protected signer: Web3Account;
  protected contract: Contract<typeof contractAbi>;

  constructor(protected configService: ConfigService) {
    const ethereumNetwork = this.configService.get('infura.ethereum_network');
    const infuraApiKey = this.configService.get('infura.api_key');

    // Configuring the connection to an Ethereum node
    this.web3 = new Web3(
      new Web3.providers.HttpProvider(
        `https://${ethereumNetwork}.infura.io/v3/${infuraApiKey}`,
      ),
    );

    // Creating a signing account from a private key
    this.signer = this.web3.eth.accounts.privateKeyToAccount(
      '0x' + this.configService.get('infura.signer_private_key'),
    );

    this.web3.eth.accounts.wallet.add(this.signer);

    // Creating a Contract instance
    this.contract = new this.web3.eth.Contract(
      contractAbi,
      this.configService.get('axie.contract_address'),
    );
  }
}
