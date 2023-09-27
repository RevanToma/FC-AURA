import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: "config.env" });
export const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_DATABASE!);
    console.log("connected to mongoDB");
  } catch (error: any) {
    console.log(error);
  }
};
