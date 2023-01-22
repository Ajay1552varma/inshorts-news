import express from 'express'
import connection from './database/db.js';
import DefaultData from './default.js';
import Route from './routes/router.js';
import cors from 'cors';
import dotenv from 'dotenv'

const app=express();
const PORT=4000;

dotenv.config();

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;

app.use(cors());
app.use('/',Route);
connection(username,password);


app.listen(PORT,()=>{
    console.log(`Server started on port no ${PORT}`);
})
DefaultData();