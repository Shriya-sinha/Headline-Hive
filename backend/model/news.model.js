import mongoose from "mongoose";

const newsSchema = new mongoose.Schema(
{
  type: "object",
  properties: {
    source: {
      type: "object",
      properties: {
        id: { type: "string" },
        name: { type: "string" }
      },
      required: ["id", "name"]
    },
    author: { type: "string" },
    title: { type: "string" },
    description: { type: "string" },
    url: { type: "string" },
    urlToImage: { type: "string" },
    publishedAt: { type: "string", format: "date-time" },
    content: { type: "string" }
  },
  required: ["source", "author", "title", "description", "url", "urlToImage", "publishedAt", "content"]
});

const 
News = mongoose.model("News", newsSchema);

export default News;
