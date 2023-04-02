const express = require('express')
const app = express()
const path = require('path')
const help = require(path.join(__dirname, 'help', 'helps.js'))
const bodyParser = require('body-parser')
const {engine} = require('express-handlebars')
require('dotenv').config()
let count = 0


console.log()


app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'public')))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', path.join(__dirname, 'views'));



app.get('/', (req, res)=>{
    res.render('site/index')
})



app.post('/', async(req, res)=>{
    let {mail} = await req.body
    help.gmailMesaj(mail, help.numberProduct(5))
    res.redirect('/')
})



app.listen(process.env.PORT, ()=>{
    console.log('Server is listening, http://127.0.0.1:3000/')
})