import express from "express";
import { getLogin, postLogin, logout } from "../controllers/authController.js";

const router = express.Router();

router.get("/", getLogin);
router.get("/login", getLogin);
router.post("/login", postLogin);
router.post('/logout', logout);

export default router;
