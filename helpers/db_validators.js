const Roles =  require('../models/role');
const Usuario =  require('../models/usuario');
//validacion de rol (si el rol es correcto)

const ExisteRolDB = async(Rol = '')=>{
    const EXisteRol = await Roles.findOne({Rol});
    if(!EXisteRol){
        throw new Error('el rol '+Rol+'no esta registrado')
 

 }
}


// validacion de correo (si el correo ya existe)

const ExisteEmailDB = async(Correo ='')=>{
    const existeEmail =  await Usuario.findOne({Correo});
    if(existeEmail){
        throw new Error('Este correo ya está registrado');
    }
}

module.exports = {ExisteRolDB,ExisteEmailDB} ; 