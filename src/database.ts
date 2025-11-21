import mongoose from "mongoose";
import { config } from "./config";

export const connectToDatabase = async () => {
  mongoose.connect(config.DatabaseURL);
};
