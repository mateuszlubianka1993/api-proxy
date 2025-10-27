import express from "express";
import { showDashboard } from "../controllers/dashboardController.js";
import { isLogged } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isLogged, showDashboard);

export default router;
