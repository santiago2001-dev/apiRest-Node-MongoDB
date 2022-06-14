const {Schema,model} = require('mongoose');


//modelo de tabla de base de datos

const usuarioShema= Schema({
    Nombre :{
        type :String,
        required: [true,'El nombre es obligatorio']
    },

    Correo :{
        type : String,
        required: [true,'El correo es obligatorio'],
        unique :  true

    },
    Pasword :{
        type : String,
        required: [true,'La contraseña  es obligatoria'],
        


    },

    Img :{
        type : String


    },
    Rol: {
        type: String,
        required: true,
        emun : ['ADMIN_ROLE','USER_ROLE']
    },
    estado: {
        type : Boolean,
        default : true
    },
    google : { 
        type :  Boolean,
        default : false
    }

});

module.exports = model('Usuario',usuarioShema);