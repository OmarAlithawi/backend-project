import {Router} from 'express';
import {questionsData} from './controllers/questionsController'
import {answersData} from './controllers/answersController'


export const router =Router();

router.route('/').get(questionsData);
router.route('/an').get(answersData)

