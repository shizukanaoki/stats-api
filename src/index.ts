import express from "express";
import fs from "node:fs/promises";
import { data } from "./data";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.get("/avg", async (req, res) => {
  const sum = data.reduce((acc, student) => {
    return acc + student.TestScore;
  }, 0);
  const avg = sum / data.length;

  res.json({ avg });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
