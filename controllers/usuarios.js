const { response, request } = require('express');
//modelo de la db 
const Usuario =  require('../models/usuario');

const bcryptjs =  require('bcryptjs');
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
    
    const {Nombre,Correo,Pasword,Rol} = req.body;
    const usuario = new Usuario({Nombre,Correo,Pasword,Rol})
    
    const salt = bcryptjs.genSaltSync();
    usuario.Pasword =  bcryptjs.hashSync(Pasword,salt),
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