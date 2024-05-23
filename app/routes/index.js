import { Router } from "express";
import rutaPago from "./routes_pago.js";

const ruta = Router();

ruta.use("/api", rutaPago);

export default ruta;