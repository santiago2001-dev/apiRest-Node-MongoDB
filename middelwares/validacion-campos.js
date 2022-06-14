const {validationResult} = require('express-validator');

const validarCampos = (req,res,next)=>{
    //con la comprobacion el el router (esta en el request) usamos validationResult
    //para saber si el correo no es valido enviar un codigo de error
    const erros = validationResult(req);

    //METODO isempty nos permite saber si la varible aesta viacia o no 
    if(!erros.isEmpty()){
        return res.status(400).json(erros);

    }
    next();
}

module.exports = {validarCampos}