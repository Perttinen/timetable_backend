import dotenv from 'dotenv';
dotenv.config();
import express from "express";

const app = express();

const port = process.env.PORT ?? '3001'

app.get("/", (req, res) => {
    res.send("Hello Worl!");
    console.log("Response sent");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});