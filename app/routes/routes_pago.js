import { Router } from "express";
import { listarPago, mostrarPago } from "../controller/controller.js";

const rutaPago = Router();

rutaPago.get("/pagom/:id", mostrarPago);
rutaPago.get("/pagol", listarPago);

export default rutaPago;