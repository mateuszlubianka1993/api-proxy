import { fetchTopHeadlines, fetchEverything } from "../services/newsService.js";

export const getTopHeadlines = async (req, res) => {
  try {
    const { country = "us", category, pageSize = 5 } = req.query;
    const data = await fetchTopHeadlines({ country, category, pageSize });
    res.json(data);
  } catch (err) {
    console.error("GetTopHeadlines error:", err);
    res.status(500).json({ error: "Server side error" });
  }
};

export const getEverything = async (req, res) => {
  try {
    const { q, pageSize = 6 } = req.query;
    const data = await fetchEverything({ q, pageSize });
    res.json(data);
  } catch (err) {
    console.error("GetEverything error:", err);
    res.status(500).json({ error: "Server side error" });
  }
};
