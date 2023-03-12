import express from "express";
import { getPesq, addPesq, updatePesq, deletePesq } from "../controllers/user.js";

const router = express.Router();

router.get("/Pesquisador", getPesq);

router.post("/Pesquisador", addPesq);

router.put("/Pesquisador/:id", updatePesq);

router.delete("/Pesquisador/:id", deletePesq);

export default router;