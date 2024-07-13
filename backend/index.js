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
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
    process.exit(1);
  });

cron.schedule("59 23 * * *", () => {
  console.log("Cron job running...");
  fetchAndStoreNews()
    .then(() => {
      console.log("News articles updated successfully");
    })
    .catch((error) => {
      console.error("Failed to update news articles:", error);
    });
});

async function fetchAndStoreNews() {
  try {
    console.log("Fetching news articles from API...");
    const response = await axios.get(API_URL);
    console.log("API response received:", response.status);
    const data = response.data;
    const newsArticles = data.articles.map((article) => {
      return {
        author: article.source.author,
        source: { author: article.source.author }, // Create a source object with author
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      };
    });
    const articlesToInsert = newsArticles.map(
      (article) => new Article(article)
    );
    console.log("Inserting news articles into database...");
    try {
      await Article.insertMany(articlesToInsert);
      console.log("News articles inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  } catch (error) {
    console.error("Failed to update news articles:", error);
  }
}
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
