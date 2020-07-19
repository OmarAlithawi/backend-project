import { createConnection, getRepository } from 'typeorm';
import "reflect-metadata";
import { Questions } from './entities/Questions';

export const dbConnect = createConnection();