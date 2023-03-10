const {response,request} = require("express")

const usuariosGet = (req=request,res=response)=>{
    const {campo} = req.query
    res.json ({
        mensaje: "get usuarios del controlador",
       campo
    })
}

const usuariosPost =(req=request,res=response)=>{
    
  const {nombre,apellido,email,edad} = req.body
  res.json({
      mensaje: "Post usuarios",
      nombre,
      apellido,
      email,
      edad
  })

}

const usuariosPut =(req=request,res=response)=>{
    res.json({
        mensaje: "Put usuarios"
    })
}


const usuariosDelete =(req=request,res=response)=>{
    res.json({
        mensaje: "Delete usuario"
    })
}

module.exports={
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete,
}