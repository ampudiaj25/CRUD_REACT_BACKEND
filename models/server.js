const express = require('express');
const cors = require('cors');

const { db } = require('../db/conection');

class Server {

    constructor() {
        this.app  = express();
        this.port = process.env.PORT;
        this.productosPath = '/api/personas';

        // Conectar a base de datos
        this.conectarDB();

        // Middlewares
        this.middlewares();

        // Rutas de mi aplicación
         this.routes();
    }

    
    async conectarDB(){

        try {
            
            await db.authenticate();
            console.log('Database online');
        } catch (error) {
            throw new Error("error");
            
        }
    }

    middlewares() {

        // CORS
        this.app.use( cors() );

        // Lectura y parseo del body
        this.app.use( express.json() );

        //  Directorio Público
        this.app.use( express.static('public') );

    }

    routes() {
     this.app.use( this.productosPath, require('../routes/personas'));
     }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en puerto', this.port );
        });
    }

}




module.exports = Server;
