import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

import connect from "../utils/connectDb.js";

mongoose.set("strictQuery", false);

connect().catch((err: unknown) => {
  console.log(err instanceof Error ? err.message : "Unexpected error");
});

const testSchema = new mongoose.Schema({
  testString: String,
});

export default mongoose.model("Test", testSchema);
