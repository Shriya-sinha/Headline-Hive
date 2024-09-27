import express from "express";
import { getNews, fetchAndStoreNews } from "../controller/News.controller.js";

const router = express.Router();
router.get("/", getNews);
router.post("/", async (req, res) => {
  try {
    await fetchAndStoreNews();
    res.json({ message: "News articles updated successfully" });
  } catch (error) {
    console.error("Error updating news articles:", error);
    res.status(500).json({ error: "Failed to update news articles" });
  }
});
export default router;
