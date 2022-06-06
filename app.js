require('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const app = express()

//Configurando JSON
app.use(express.json())

//Conectando ao mongoDB
const dbUser=process.env.DB_USER
const dbPass=process.env.DB_PASS

mongoose
    .connect(
        `mongodb+srv://${dbUser}:${dbPass}@cluster0.ocptv.mongodb.net/authjwt?retryWrites=true&w=majority`
    )
    .then(()=>{
        console.log('Conectado ao MongoDB')
    })
    .catch((err)=>console.log(err))


//Rota padrão - Open
app.get('/',(req,res)=>{
    res.status(200).json({msg: "bem vindo a API"})
})

//Rota Usuario - Registrar Usuario
app.post('/auth/register',async(req,res)=>{
    const {name,email,pass,confpass} = req.body
    
    //Validação
    if(!name){
        return res.status(422).json({msg: 'o nome é obrigatorio'})
    }
})

//Iniciando o servidor
app.listen(process.env.PORT, console.log('Servidor em execução na porta '+process.env.PORT))


