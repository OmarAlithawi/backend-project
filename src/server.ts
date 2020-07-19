import express from 'express';
import { createConnection, getRepository } from 'typeorm';

import { dbConnect } from './database';
import { Questions } from './entities/Questions';


const app = express();

app.get('/' , async (req ,res) =>{
  try{
    const result = await dbConnect.then(connection => {
        return  connection.manager.find(Questions)
    })
    res.send(result);
  }catch(err){
      console.log(err);
  }
  
})

export const server = async () => {

    await  app.listen(5000 , () => {
        console.log("hey you are connected to the server");
    });
     
      
  }
  