const http = require('http');

const express = require('express');

const exapp = express();


exapp.use('/user', (req, res, next)=>{
    console.log('Am in express app use - two ');
    res.send('<h1>Hi from app use - two</h1>');
});

exapp.use('/', (req, res, next)=>{
console.log('Am in express app use- one ');
res.send('<h1>Hi from app use- one</h1>');
});


exapp.listen(3000);