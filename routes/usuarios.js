
const { Router } = require('express');
const { check } = require('express-validator');
const {validarCampos} =  require('../middelwares/validacion-campos');
const {ExisteRolDB}  = require ('../helpers/db_validators');

const { usuariosGet,
        usuariosPut,
        usuariosPost,
        usuariosDelete,
        usuariosPatch } = require('../controllers/usuarios');

const router = Router();


router.get('/',usuariosGet );

router.put('/:id', usuariosPut );

router.post('/',
//commprovaciones
//name , comprobamos que la variable name tenga algún valor y no esté vacia 
check('Nombre','El nombree es obligatorio').not().isEmpty(),

//email
check('Correo','El correo no es valido').isEmail(),
//pass is.lenght valida si el tamañano del string
check('Pasword','La contraseña debe tener mas de 6 caracteres').isLength({min:6}),
//check('Rol','el rol no es un parametro establicido').isIn(['ADMIN_ROLE','ADMIN_ROLE']),

//validación personalisada atravez de la DB
//Con custom podemos crear validaciones personalizadas
check('Rol').custom(ExisteRolDB),
validarCampos,
usuariosPost );



router.delete('/', usuariosDelete );

router.patch('/', usuariosPatch );





module.exports = router;