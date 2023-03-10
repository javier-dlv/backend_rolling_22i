const express = require('express')
const cors = require('cors')

class Server{
    constructor(){
        this.app = express()
        this.usuariosPath = "/api/usuarios"

        this.middlewares()

        this.routes()

    }

    
    middlewares(){
        //CORS
        this.app.use(cors())

        //LEER LO QUE ENVIA EL USUARIO POR EL CUERPO DE LA PETICION
        this.app.use(express.json())
        

        //DEFINIR LA CARPETA PUBLICA
        this.app.use(express.static("public"))
    }

    routes(){

        this.app.use(this.usuariosPath, require("../routes/usuarios"))
       /* this.app.get('/api/usuarios', function (req, res) {
            res.json({
                mensaje: "soy una api de usuarios"
            })
          })
          */
    }
    listen(){
        this.app.listen(8080, ()=>{
            console.log("server online port 8080")
        })
    }
}


module.exports = Server