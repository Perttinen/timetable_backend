import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const url =
  typeof process.env.DATABASE === "string"
    ? process.env.DATABASE
    : "Db connection string not defined";

const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("connected to MongoDB");
  } catch (err: unknown) {
    console.log(
      err instanceof Error ? err.message : "Unable to connect database"
    );
  }
};

export default connectDb;
