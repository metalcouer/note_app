const express = require('express')
const app = express()
var port = process.env.PORT || 3000;
var knex = require('./knex');

console.log(knex);

app.get('/', function(req, res, next){
    res.send('hello world')
})

app.listen(port, function(){
    console.log(`porty on ${port}`)
})