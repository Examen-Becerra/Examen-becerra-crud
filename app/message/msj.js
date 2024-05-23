
export const Success = (req, res, status = 500, msj = "") => {
    res.status(status).json({
        error : true,
        status : status,
        body : msj
    })
}
export const Error = (req, res, status = 500, msj = "") => {
    res.status(status).json({
        error : true,
        status : status,
        body : msj
    })
}