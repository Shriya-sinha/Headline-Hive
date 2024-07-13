import mongoose from "mongoose";

const newsSchema = new mongoose.Schema({
  title: String,
  description: String,
  url: String,
  urlToImage: String,
  publishedAt: Date,
  content: String,
  author: String,
  source: {
    author: String
  }
});

const 
Article = mongoose.model("News", newsSchema);

export default Article;

