import express from "express";
import { getExp, addExp, updateExp, deleteExp } from "../controllers/user.js";

const router = express.Router();

router.get("/Experimento", getExp);

router.post("/Experimento", addExp);

router.put("/Experimento/:id", updateExp);

router.delete("/Experimento/:id", deleteExp);

export default router;