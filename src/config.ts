import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  DatabaseURL:
    process.env.DATABASE_URL || "mongodb://user:password@127.0.0.1:27017/test",
  Hostname: process.env.HOST || "localhost",
  Port: Number(process.env.PORT) || 3000,
};
