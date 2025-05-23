import express from "express";
import dotenv from 'dotenv';
dotenv.config();
const app = express();

const port = process.env.PORT as string;

app.get("/", (req, res) => {
    res.send("Hello Worl!");
    console.log("Response sent");
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});