import express from 'express';
import { getNews } from '../controller/News.controller.js';

const router = express.Router();
router.get('/', getNews);
export default router;
