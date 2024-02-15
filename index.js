//const express = require('express');
import  express  from 'express';
import Connection from './database/db.js';
import cors from 'cors';
import bodyparser from 'body-parser';
import Routes from './routes/route.js'

const app = express();
app.use(cors());

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({extended:true}))
app.use('/',Routes);

const PORT = 8000;
Connection();

app.listen(PORT,()=>console.log(`your server is running on port ${PORT}`))