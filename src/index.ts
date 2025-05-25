import dotenv from "dotenv";
dotenv.config();
import express from "express";

import Test from "./models/test.js";

const app = express();

const port = process.env.PORT ?? "3001";

const dbTest = async () => {
  const testthing = new Test({
    testString: "Just testing4",
  });
  const result = await testthing.save();
  console.log(result);
  const deleted = await Test.deleteMany({});
  console.log(deleted);
};

dbTest().catch((err: unknown) => {
  console.log(err instanceof Error ? err.message : "Unexpected error");
});

app.get("/", (req, res) => {
  res.send("Hello Worl!");
  console.log("Response sent");
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
