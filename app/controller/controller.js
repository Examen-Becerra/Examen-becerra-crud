import { db } from "../config/db.mysql.js"
import { Success , Error } from "../message/msj.js"

export const mostrarPago = async(req, res) => {
    const id = req.params['id'];


    try {
        const respuesta = await db.query(`CALL SP_MOSTRAR('${id}')`)

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

export const insertarPago  = async(req, res) => {
    const {nombre, valor} = req.body

    try {
        const respuesta = await db.query(`CALL SP_CREAR('${nombre}', '${valor}')`);

        if (respuesta[0]. affectedRows == 1) {
            Success(req, res, 200, "El pago se ha insertado correctamente")
        } else {
            Error(req, res, 200, "El pago no se pudo insertar correctamente")
            
        }
        
    } catch (error) {
        Error(req, res, 400, error)
    }
}