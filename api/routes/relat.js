import express from "express";
import { getRelat} from "../controllers/user.js";

const router = express.Router();

router.get("/Relatorio/", getRelat);



export default router;