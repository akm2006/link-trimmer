const express = require("express");
const serverless = require("serverless-http");
const mongoose = require("mongoose");
const path = require("path");
const Url = require("../models/url");
const { nanoid } = require("nanoid");

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "../views"));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/", async (req, res) => {
  const urls = await Url.find().sort({ createdAt: -1 });
  res.render("index", { urls });
});

app.post("/shorten", async (req, res) => {
  const { fullUrl } = req.body;
  const short = nanoid(6);
  const newUrl = new Url({ full: fullUrl, short });
  await newUrl.save();
  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await Url.findOne({ short: req.params.shortUrl });
  if (!shortUrl) return res.sendStatus(404);
  shortUrl.clicks++;
  await shortUrl.save();
  res.redirect(shortUrl.full);
});

// Export for Vercel
module.exports = app;
module.exports.handler = serverless(app);
