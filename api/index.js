import express from "express";
import pesqRoutes from "./routes/pesq.js";
import reaRoutes from "./routes/rea.js";
import tecRoutes from "./routes/tec.js";
import equipRoutes from "./routes/equip.js";
import expRoutes from "./routes/exp.js";
import agendRoutes from "./routes/agend.js";
import relatRoutes from "./routes/relat.js";
import cors from "cors";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/", pesqRoutes);
app.use("/", reaRoutes);
app.use("/", tecRoutes);
app.use("/", equipRoutes);
app.use("/", expRoutes);
app.use("/", agendRoutes);
app.use("/", relatRoutes);

app.listen(3001);
