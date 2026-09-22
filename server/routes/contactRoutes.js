import express from "express";
import { sendContactMessage } from "../controller/contactController.js";

const router = express.Router();

router.post("/contact", sendContactMessage);

export default router;