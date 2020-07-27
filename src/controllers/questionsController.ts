import {Request ,Response , NextFunction} from 'express'
import { getRepository , getManager } from 'typeorm';
import {Questions} from '../entities/Questions'


import { dbConnect } from '../database';
import { Answers } from '../entities/Answers';
import { answersData } from './answersController';


export const questionsData = async (req:Request ,res:Response ,next:NextFunction) => {
    try{

        const questionRepo = getManager().getRepository(Questions)
        const answersRepo = getManager().getRepository(Answers);
        const answer = await answersRepo.findOne({where:{id:1}})
         const questions = await questionRepo.findOne({where:{id:1} ,relations:['answers']});
         questions?.answers.push(answer!)
         res.status(200).json(questions) ;

    }catch(err){
        console.log(err)
    }
}

  