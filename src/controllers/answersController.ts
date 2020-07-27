
import { getRepository , getManager } from 'typeorm';
import {Answers} from '../entities/Answers'
import {Questions} from '../entities/Questions'

import { dbConnect } from '../database';
import {Request ,Response , NextFunction} from 'express'

export const answersData = async (req:Request ,res:Response , next:NextFunction) => {
    try{
        const answerRepo = getManager().getRepository(Answers)
        const {id} = req.params;
         const answers = await answerRepo.find({relations:['question']});
         console.log(answers)
         res.status(200).json(answers) ;

    }catch(err){
        console.log(err)
    }
}

  