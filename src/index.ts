import dotenv from "dotenv";
dotenv.config();
import express from "express";

import userRouter from "./routes/userRoutes.js";
import connectDb from "./utils/connectDb.js";

const app = express();

const port = process.env.PORT ?? "3001";

app.use(express.json());

connectDb().catch((err: unknown) => {
  console.log(
    err instanceof Error ? err.message : "Unable to connect database"
  );
});

app.get("/", (req, res) => {
  res.send("Hello Worl!");
  console.log("Response sent");
});

app.use("/userapi", userRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
