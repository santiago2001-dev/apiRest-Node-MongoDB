const mongoose =require('mongoose');

const dbConnection = async()=>{

    try{
        await mongoose.connect(process.env.MONGO_CNN)
 
        console.log('conexión a base de datos exitosa')


    }catch(error){
        console.log(error)
        throw new Error('Error en la conexion de la db')

    }

}


module.exports={
    dbConnection
}