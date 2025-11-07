import express from "express";
import { showDashboard, showAddApiForm, addApi } from "../controllers/dashboardController.js";
import { isLogged } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isLogged, showDashboard);
router.get("/new", isLogged, showAddApiForm);
router.post('/new', addApi);

export default router;
