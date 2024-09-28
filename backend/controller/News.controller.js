// News controller
import fetch from  'node-fetch';
import News from '../model/news.model.js';
const API_URL = process.env.API_URL;

async function fetchAndStoreNews() {
  try {
    console.log("Fetching news articles from API...");
    const response = await fetch(API_URL);
    console.log("API response received:", response.status);
    const data = response.data;
    const newsArticles = data.articles.map((article) => {
      return {
        author: article.source.author,
        source: { author: article.source.author },
        title: article.title,
        description: article.description,
        url: article.url,
        urlToImage: article.urlToImage,
        publishedAt: article.publishedAt,
        content: article.content,
      };
    });
    const articlesToInsert = newsArticles.map((article) => new News(article));
    console.log("Inserting news articles into database...");
    try {
      await News.insertMany(articlesToInsert);
      console.log("News articles inserted successfully");
    } catch (error) {
      console.error("Error inserting data:", error);
    }
  } catch (error) {
    console.error("Failed to update news articles:", error);
  }
}

async function fetchLatestNews() {
  try {
    console.log("Retrieving latest news articles from database...");
    const articles = await News.find().sort({ publishedAt: -1 }).limit(100);
    console.log("Latest news articles retrieved:", articles);
  } catch (error) {
    console.error("Error retrieving latest news articles:", error);
  }
}

async function removeOldNews() {
  try {
    console.log("Removing old news articles from database...");
    const threeDaysAgo = new Date(Date.now() - 3 * 24 * 60 * 60 * 1000);
    await News.deleteMany({ publishedAt: { $lt: threeDaysAgo } });
    console.log("Old news articles removed successfully");
  } catch (error) {
    console.error("Error removing old news articles:", error);
  }
}

async function getNews(req, res) {
  try {
    const newsArticles = await News.find();
    res.json(newsArticles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch news articles" });
  }
}
export { fetchAndStoreNews, fetchLatestNews, removeOldNews, getNews };
