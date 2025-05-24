import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";

const url =
  typeof process.env.DATABASE === "string" ? process.env.DATABASE : "eiole";

mongoose.set("strictQuery", false);

const testSchema = new mongoose.Schema({
  testString: String,
});

const Test = mongoose.model("Test", testSchema);

const run = async () => {
    try{
  await mongoose.connect(url);
  const testthing = new Test({
    testString: "Just testing4",
  });
  const result = await testthing.save();
  console.log(result);
  await mongoose.connection.close();
}catch (err: unknown) {
    console.log(err instanceof Error ? err.message : "Unexpected error");
}
};

run().catch((err: unknown) => {
  console.log(err instanceof Error ? err.message : "error");
});
