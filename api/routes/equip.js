import express from "express";
import { getEquip, addEquip, updateEquip, deleteEquip } from "../controllers/user.js";

const router = express.Router();

router.get("/Equipamento", getEquip);

router.post("/Equipamento", addEquip);

router.put("/Equipamento/:id", updateEquip);

router.delete("/Equipamento/:id", deleteEquip);

export default router;