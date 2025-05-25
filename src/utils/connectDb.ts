import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

mongoose.set("strictQuery", false);

const url =
  typeof process.env.DATABASE === "string"
    ? process.env.DATABASE
    : "not defined";

const connect = async () => {
  await mongoose.connect(url);
  console.log("connected to MongoDB");
};

export default connect;
