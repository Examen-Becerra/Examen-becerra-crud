import { Router } from "express";
import { actualizarPago, insertarPago, listarPago, mostrarPago } from "../controller/controller.js";

const rutaPago = Router();

rutaPago.get("/pagom/:id", mostrarPago);
rutaPago.get("/pagol", listarPago);
rutaPago.post("/pagoc", insertarPago);
rutaPago.put("/pagoa", actualizarPago);

export default rutaPago;