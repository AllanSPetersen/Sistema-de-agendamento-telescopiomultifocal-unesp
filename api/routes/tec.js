import express from "express";
import { getTec, addTec, updateTec, deleteTec } from "../controllers/user.js";

const router = express.Router();

router.get("/Tecnico", getTec);

router.post("/Tecnico", addTec);

router.put("/Tecnico/:id", updateTec);

router.delete("/Tecnico/:id", deleteTec);

export default router;