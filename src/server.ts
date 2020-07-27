import express from 'express';
import {router as question} from './routes';


const app = express();

app.get('/' , async (req ,res) =>{
 res.send('Hello')
  
})

app.use('/api', question);

export const server = async () => {

    await app.listen(5000 , () => {
        console.log("hey you are connected to the server");
    });
     
  }
  