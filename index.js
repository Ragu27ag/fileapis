import express from 'express';

import { createFile,readDirectory } from './crud.js';

const app= express();

const port = 5000;

const host = 'localhost'

app.get('/',(req,res) => {
    res.send(createFile())
})


app.get('/readdir',(req,res) => {
    res.send(readDirectory())
})


app.listen(port,()=>{
    console.log(`http://${host}:${port}`)
})