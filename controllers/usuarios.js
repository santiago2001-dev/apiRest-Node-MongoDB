const { response, request } = require('express');
const bcryptjs =  require('bcryptjs');
const Usuario =  require('../models/usuario');

const usuariosGet = (req = request, res = response) => {

    const { q, nombre = 'No name', apikey, page = 1, limit } = req.query;

    res.json({
        msg: 'get API - controlador',
        q,
        nombre,
        apikey,
        page, 
        limit
    });
}

const usuariosPost = async(req, res = response) => {
  
  

    //desestrucutramos el body para sacar las propiedades que queremos
    const {Nombre,Correo,Pasword,Rol} = req.body;

    //enviamos el body desestrcutrado a la instancia de nunestro shema
    const usuario = new Usuario({Nombre,Correo,Pasword,Rol})
    //validación de correo existente

    //con find One podemos compravar si existe la seleccion dentro de 
    // el shema de mongo
    //en este caso comprobamos si ya existe este correo en la db
    const existeEmail =  await Usuario.findOne({Correo});
    if (existeEmail){
        return res.status(400).json({
            msg : 'El  correo ya está registrado'
        })

    }

    //encriptamos el pass
    const salt = bcryptjs.genSaltSync();
   
    usuario.Pasword =  bcryptjs.hashSync(Pasword,salt),

    //Enviamos los registros a la db 
    await usuario.save();
     

    res.json({

       usuario
    });
}

const usuariosPut = (req, res = response) => {

    const { id } = req.params;

    res.json({
        msg: 'put API - usuariosPut',
        id
    });
}

const usuariosPatch = (req, res = response) => {
    res.json({
        msg: 'patch API - usuariosPatch'
    });
}

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete API - usuariosDelete'
    });
}




module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosPatch,
    usuariosDelete,
}