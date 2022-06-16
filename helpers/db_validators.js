const Roles =  require('../models/role');

const ExisteRolDB = async(Rol = '')=>{
    const EXisteRol = await Roles.findOne({Rol})
    if(!EXisteRol){
        throw new Error('el rol '+Rol+'no esta registrado')
 

 }
}


module.exports = {ExisteRolDB} ; 