import express from 'express';
import { errorHandler } from './middleware/ErrorHandler';
import { databaseConnection } from './db';
import Routes from './routes';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

databaseConnection();

app.use('/', Routes);

app.use(errorHandler);
