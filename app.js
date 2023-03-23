const express = require('express')

const app = express()
const port = process.env.port || 3000
const env = require('dotenv').config()
const mongoose = require('mongoose')
const url =`mongodb+srv://${process.env.DB_username}:${process.env.DB_password}@cluster0.l162asa.mongodb.net/FilesToDatabase`
const router = require('./Router/fileRouter')
const bodyParser = require('body-parser')
const fileUplod = require('express-fileupload')

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {console.log('connected...')}).catch((err) => {console.log(err)});

app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())
app.use(fileUplod({
    useTempFiles: true,
    tempFileDir: 'public/'
}))
app.use('', router)



let path = require('path')

app.listen(port, ()=>{
    console.log(`running on port ${port}`)
})