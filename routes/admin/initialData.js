import express from "express";
import { initialData } from "../../controller/admin/initialData.js";
const router = express.Router();

router.post("/initialdata", initialData);

export default router;
