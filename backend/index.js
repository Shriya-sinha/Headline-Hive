import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import axios from "axios";
import NewsRoute from "./route/news.route.js";
import cors from "cors";
import Article from "./model/news.model.js";
import { getNews } from "./controller/News.controller.js";
import cron from "node-cron";

const app = express();

app.use(express.json());
app.use(cors());

const newsApiKey = "d8f4560c24ec4d1ba8f4300712df3460";
const API_URL = `https://newsapi.org/v2/top-headlines?country=in&apiKey=${newsApiKey}`;

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

  async function fetchAndStoreNews() {
    try {
      const response = await axios.get(API_URL);
      const data = response.data;
      const newsArticles = data.articles.map(
        (article) => new Article(article)
      );
      await Article.insertMany(newsArticles);
      console.log("News articles updated successfully");
    } catch (error) {
      console.error("Failed to update news articles:", error);
    }
  }


cron.schedule("0 0 * * *", async () => {
   try {
     await fetchAndStoreNews();
     console.log("News articles updated successfully");
   } catch (error) {
     console.error("Failed to update news articles:", error);
   }
});
app.get("/api/news", async (req, res) => {
  try {
    const newsArticles = await Article.find();
    res.json(newsArticles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news articles" });
  }
});

app.post("/api/news", async (req, res) => {
  try {
    await fetchAndStoreNews();
    res.json({ message: "News articles updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update news articles" });
  }
});

app.use("/api/news", NewsRoute);
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
