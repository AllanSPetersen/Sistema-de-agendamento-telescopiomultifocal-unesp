import express from "express";
import { getRea, addRea, updateRea, deleteRea } from "../controllers/user.js";

const router = express.Router();

router.get("/Reagente", getRea);

router.post("/Reagente", addRea);

router.put("/Reagente/:id", updateRea);

router.delete("/Reagente/:id", deleteRea);

export default router;