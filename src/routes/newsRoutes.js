import express from "express";
import { getTopHeadlines, getEverything } from "../controllers/newsController.js";

const router = express.Router();

router.get("/top-headlines", getTopHeadlines);
router.get("/everything", getEverything);

export default router;
