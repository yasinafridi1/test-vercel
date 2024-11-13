const express = require("express");
const app = express();
const port = process.env.PORT || 4000;

app.get("/health", (req, res) => {
  return res.status(200).json({ message: "Hello world" });
});

app.get("/", (req, res) => {
  res.send("Welcome to my Node.js API!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
