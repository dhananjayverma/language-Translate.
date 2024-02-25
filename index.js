const express = require("express");
const bodyParser = require("body-parser");
const translate = require("translate-google");
const cors = require("cors");

const app = express();
const PORT = 5000;
app.use(bodyParser.json());

app.post("/api/translate", async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res
        .status(400)
        .json({ error: "Missing 'text' key in request body" });
    }
    const translation = await translate(text, { from: "en", to: "fr" });
    res.status(201).json({ translation });
  } catch (error) {
    console.log("Error during translation: " + error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log("Server listening on port " + PORT);
});
