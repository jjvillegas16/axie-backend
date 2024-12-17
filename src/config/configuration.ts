const AXIE_ENDPOINT = 'https://graphql-gateway.axieinfinity.com/graphql';
const AXIE_CONTRACT_ADDRESS = '0xF5b0A3eFB8e8E4c201e2A935F110eAaF3FFEcb8d';

const DEFAULT_DB_PORT_STRING = '27017';
const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_PORT = parseInt(process.env.DB_PORT || DEFAULT_DB_PORT_STRING, 10);
const DB_NAME = process.env.DB_NAME;

const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET_KEY_EXPIRE_TIME = '45m';

const ETHEREUM_NETWORK = process.env.ETHEREUM_NETWORK;
const INFURA_API_KEY = process.env.INFURA_API_KEY;
const SIGNER_PRIVATE_KEY = process.env.SIGNER_PRIVATE_KEY;

export default () =>
  ({
    axie: {
      endpoint: AXIE_ENDPOINT,
      contract_address: AXIE_CONTRACT_ADDRESS,
    },
    http: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    port: DB_PORT,
    db: {
      uri: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT`,
      name: DB_NAME,
    },
    auth: {
      bcrypt_rounds: BCRYPT_ROUNDS,
      jwt_secret_key: JWT_SECRET_KEY,
      jwt_secret_key_expire_time: JWT_SECRET_KEY_EXPIRE_TIME,
    },
    infura: {
      ethereum_network: ETHEREUM_NETWORK,
      api_key: INFURA_API_KEY,
      signer_private_key: SIGNER_PRIVATE_KEY,
    },
  }) as const;
