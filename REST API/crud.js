const express = require('express')
const app = express()
const mongoose = require('mongoose')
app.use(express.urlencoded({extended:false}))
app.use(express.json())
const Router = require('./router')



app.use('/crud',Router)

mongoose.connect("mongodb://127.0.0.1:27017/test")

const con = mongoose.connection

con.on('open',()=>{
    console.log("connected ....")
})


app.listen(3000)