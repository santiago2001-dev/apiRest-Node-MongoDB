const express = require('express');
const cors = require('cors');
const {dbConnection} = require('../db/config')
class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';

         //conexión db mongo
         this.ConectarDb();
        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes();
   
    
    }
     
    async ConectarDb(){
        await dbConnection();
    }

    middlewares() {
       

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        // Directorio Público
        this.app.use( express.static('public') );

    }
    
 

    routes() {
        this.app.use( '/api', require('../routes/usuarios'));
    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
