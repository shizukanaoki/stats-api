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
    return acc + student.score;
  }, 0);
  const avg = sum / data.length;

  res.json({ avg });
});

app.get("/top", async (req, res) => {
  const sorted = [...data];
  // Sort the data by score in descending order by bubble sort
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - 1 - i; j++) {
      if (sorted[j].score < sorted[j + 1].score) {
        const temp = sorted[j];
        sorted[j] = sorted[j + 1];
        sorted[j + 1] = temp;
      }
    }
  }
  res.json(sorted.slice(0, 3));
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
