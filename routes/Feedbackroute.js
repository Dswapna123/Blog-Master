import express from "express";
import { getFeedback,createFeedback} from "../controllers/Feedbackcontrollers.js";
import { createFeedback } from "../controllers/Feedbackcontrollers.js";
const router = express.Router();

router.get("/page/Feedback", getFeedback);
router.post("/api/Feedback", createFeedback);

export default router;