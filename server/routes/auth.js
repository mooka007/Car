import express from "express";
import { register, login, emailVerification } from "../controller/auth.js";

const router = express.Router();

router.post("/register", register)
router.post("/login", login)
router.get('/emailVerification/:token', emailVerification)

export default router;