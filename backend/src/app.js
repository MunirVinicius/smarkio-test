const express = require('express')
const app = express()
const path = require('path')
const convert = require('../src/service/convertText')
const db = require('./db');

const public = path.join (__dirname, '../public')

app.use(express.urlencoded());
app.use(express.json())
app.use(express.static(public))
app.set('views', path.join (__dirname, '../views'));
app.set('view engine', 'pug')

app.get('/', async function (req, response) {
    const results = await db.read()
    response.render('index',{
        audios:results.map((result)=>{
            return {
                txt:result.txt,
                audio: result.audio
            }
        })
    });
})

app.post('/convert', function(request,response){
    if(!request.body.txt){
        return response.send({
            error: 'You must provide a search term'
        })
    }
    convert(request.body.txt,(audio)=>{
        return response.json({
            audio
        })
    })

})

app.listen(3000,()=>{
    console.log("Server is up on 3000 port :)")
})

