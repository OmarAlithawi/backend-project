
import { getRepository } from 'typeorm';
import {Questions} from '../entities/Questions'

import { dbConnect } from '../database';
import { NextFunction } from 'express';

export const data = async (req:any ,res:any ,next:any) => {
    try{
         const questions:Questions [] = await Questions.find({relations:['answers']});
         res.status(200).json(questions) ;

    }catch(err){
        console.log(err)
    }
}

  