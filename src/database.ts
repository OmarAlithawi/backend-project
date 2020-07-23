import { createConnection, getRepository } from 'typeorm';
import "reflect-metadata";
import { Questions } from './entities/Questions';

export const dbConnect = createConnection();



/*
.then( async connection => {

    let question = new Questions();
    question.question = "What is the best programming language in the word ?";
    question.difficulty ="Easy";
    


    let questionRepository = connection.getRepository(Questions);

    // saving a question also save the metadata
    await questionRepository.save(question);
           

}).catch(error => console.log(error));

*/