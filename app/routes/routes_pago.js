import { Router } from "express";
import { actualizarPago, eliminarPago, insertarPago, listarPago, mostrarPago } from "../controller/controller.js";

const rutaPago = Router();

// para mostrar un solo pago
rutaPago.get("/pagom/:id", mostrarPago);

// para mostrar todos los pagos
rutaPago.get("/pagol", listarPago);

//para insertar un pago
rutaPago.post("/pagoc", insertarPago);

//para actualizar el valor de un pago
rutaPago.put("/pagoa", actualizarPago);

//para eliminar un pago
rutaPago.delete("/pagoe", eliminarPago);

export default rutaPago;