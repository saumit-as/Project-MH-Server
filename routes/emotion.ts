import express from "express";

export const emotionRouter = express.Router();

emotionRouter.post("/", async (req, res) => {
  const body = req.body;
  console.log(body);
  const key = body.key;
  const data = await fetch("http://127.0.0.1:5000/emotion", {
    cache: "no-store",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  console.log(data);

  res.send(data);
});
