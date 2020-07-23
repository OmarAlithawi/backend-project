import {Router} from 'express';
import {data} from './controllers/questionsController'

export const router =Router();

router.route('/').get(data)