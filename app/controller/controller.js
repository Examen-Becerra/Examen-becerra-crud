import { db } from "../config/db.mysql.js"
import { Success , Error } from "../message/msj.js"

export const mostrarPago = async(req, res) => {
    const {id} = req.params['id'];
    console.log(id);
    console.log("hola");

    try {
        const respuesta = await db.query(`CALL SP_MOSTAR('${id}')`)

        Success(req, res, 200, respuesta[0][0])
        
    } catch (error) {
        Error(req, res, 400, error)
    }
}
export const listarPago = async(req, res) => {
    try {
        const respuesta = await db.query(`CALL SP_LISTAR()`)

        Success(req, res, 200, respuesta[0][0])
        
    } catch (error) {
        Error(req, res, 400, error)
    }
}