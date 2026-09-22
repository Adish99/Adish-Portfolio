import express from "express";
import rateLimit from "express-rate-limit";

import { sendContactMessage } from "../controller/contactController.js";

const router = express.Router();

const contactLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  limit: 10, // 10 requests per IP
  standardHeaders: "draft-8",
  legacyHeaders: false,
  message: {
    success: false,
    message: "Too many contact requests. Please try again later.",
  },
});

router.post("/contact", contactLimiter, sendContactMessage);

export default router;