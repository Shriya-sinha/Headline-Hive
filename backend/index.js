import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import axios from "axios";
import NewsRoute from "./route/news.route.js";
const app = express();

app.use(express.json());

const newsApiKey = "d8f4560c24ec4d1ba8f4300712df3460";
const cnnSource = "cnn";

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get(
      `https://newsapi.org/v2/top-headlines?sources=${cnnSource}&apiKey=${newsApiKey}`
    );
    const articles = response.data.articles;
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching news articles" });
  }
});
dotenv.config();

const PORT = process.env.PORT || 4000;
const mongoDBURI = process.env.mongoDBURI;

if (!mongoDBURI) {
  console.error("Error: mongoDBURI environment variable is not set");
  process.exit(1);
}

console.log(`Connecting to MongoDB at ${mongoDBURI}`);

mongoose
  .connect(mongoDBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });
app.use("/api/news", NewsRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
