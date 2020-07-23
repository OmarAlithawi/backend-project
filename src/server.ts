import express from 'express';
import { createConnection, getRepository } from 'typeorm';

import { dbConnect } from './database';
import { Questions } from './entities/Questions';
import { Answers } from './entities/Answers';
import {router as question} from './routes';


const app = express();


app.get('/' , async (req ,res) =>{
  try{
    const result = await dbConnect.then(async connection => {
        await  connection.getRepository(Questions);
  })
    res.send(result);
    console.log(result)
  }catch(err){
      console.log(err);
  }
  
})

app.use('/api', question);
export const server = async () => {

    await  app.listen(5000 , () => {
        console.log("hey you are connected to the server");
    });
     
      
  }
  