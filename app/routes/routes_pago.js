import { Router } from "express";
import { insertarPago, listarPago, mostrarPago } from "../controller/controller.js";

const rutaPago = Router();

rutaPago.get("/pagom/:id", mostrarPago);
rutaPago.get("/pagol", listarPago);
rutaPago.post("/pagoc", insertarPago);

export default rutaPago;