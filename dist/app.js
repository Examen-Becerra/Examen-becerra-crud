import { config } from "dotenv";
config();
import express from "express";
import ruta from "./routes/index.js";
const app = express();
app.set("port", process.env.PORT);
app.use(express.json());
app.use("/", ruta);
export default app;