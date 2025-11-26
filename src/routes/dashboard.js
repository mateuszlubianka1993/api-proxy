import express from "express";
import { showDashboard, showAddApiForm, addApi, deleteApi, showEditApiForm, updateApi } from "../controllers/dashboardController.js";
import { isLogged } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/", isLogged, showDashboard);
router.get("/new", isLogged, showAddApiForm);
router.post("/new", isLogged, addApi);
router.post("/delete/:id", isLogged, deleteApi);
router.get("/edit/:id", isLogged, showEditApiForm);
router.post("/edit/:id", isLogged, updateApi);

export default router;
