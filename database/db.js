import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const username = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


 const Connection = ()=>{

    const MONGODB_URL = `mongodb://${username}:${PASSWORD}@ac-pqhwmtb-shard-00-00.qs5dvzy.mongodb.net:27017,ac-pqhwmtb-shard-00-01.qs5dvzy.mongodb.net:27017,ac-pqhwmtb-shard-00-02.qs5dvzy.mongodb.net:27017/?ssl=true&replicaSet=atlas-56lj9r-shard-0&authSource=admin&retryWrites=true&w=majority`
    mongoose.connect(MONGODB_URL,{UseNewUrlParser:true});
    mongoose.connection.on('connected',()=>{
        console.log('Database connected succesfully');
    })

    mongoose.connection.on('disconnected',()=>{
        console.log('Database disconnected');
    })

    mongoose.connection.on('error',()=>{
        console.log('Error while connecting with the database',console.error.message)
    })
}

export default Connection 