const AXIE_ENDPOINT = 'https://graphql-gateway.axieinfinity.com/graphql';

const DEFAULT_APP_PORT_STRING = '3000';
const DEFAULT_DB_PORT_STRING = '27017';

const DB_HOST = process.env.DB_HOST;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_USER = process.env.DB_USER;
const DB_PORT = parseInt(process.env.DB_PORT || DEFAULT_DB_PORT_STRING, 10);
const DB_NAME = process.env.DB_NAME;

const BCRYPT_ROUNDS = process.env.BCRYPT_ROUNDS;
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
const JWT_SECRET_KEY_EXPIRE_TIME = '45m';

export default () =>
  ({
    axie: {
      endpoint: AXIE_ENDPOINT,
    },
    http: {
      headers: {
        'Content-Type': 'application/json',
      },
    },
    port: parseInt(process.env.PORT || DEFAULT_APP_PORT_STRING, 10),
    db: {
      uri: `mongodb://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/?authMechanism=DEFAULT`,
      name: DB_NAME,
    },
    auth: {
      bcrypt_rounds: BCRYPT_ROUNDS,
      jwt_secret_key: JWT_SECRET_KEY,
      jwt_secret_key_expire_time: JWT_SECRET_KEY_EXPIRE_TIME,
    },
  }) as const;
