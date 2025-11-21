import * as dotenv from "dotenv";
dotenv.config();

class Config {
  MongoInitdbRootUsername: string =
    process.env.MONGO_INITDB_ROOT_USERNAME || "root";
  MongoInitdbRootPassword: string =
    process.env.MONGO_INITDB_ROOT_PASSWORD || "example";
  hostname: string = process.env.HOST || "localhost";
  port: number = Number(process.env.PORT) || 3000;
}

export const loadConfig = (): Config => {
  return new Config();
};
