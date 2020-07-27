import { createConnection, getRepository ,getManager} from 'typeorm';
import "reflect-metadata";


export const dbConnect = createConnection();






















/**
 * import { Questions } from './entities/Questions';
import { Answers } from './entities/Answers';
 * .then( async connection => {

    let answer = new Answers();
    const questionRepo =  connection.getRepository(Questions);
     const question1 = await questionRepo.findOne({where:{id:1} , relations:['answers']});
     
    
    answer.firstAnswer = "C++";
    answer.secondAnswer = "java";
    answer.thirdAnswer = "javascript";
    answer.fourthAnswer = "ruby";
    
    question1?.answers.push(answer);

   // console.log(question1);

    await questionRepo.save(question1!);
           

}).catch(error => console.log(error));


 */


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