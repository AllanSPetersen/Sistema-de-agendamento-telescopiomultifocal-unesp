import express from "express";
import { getAgend, addAgend, updateAgend, deleteAgend } from "../controllers/user.js";

const router = express.Router();

router.get("/Agendamento", getAgend);

router.post("/Agendamento", addAgend);

router.put("/Agendamento/:id", updateAgend);

router.delete("/Agendamento/:id", deleteAgend);

export default router;