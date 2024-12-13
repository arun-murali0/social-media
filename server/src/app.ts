import express from 'express';
import cors from 'cors';
import helmet from 'helmet';

import { databaseConnection } from './db';
import { errorHandler } from './middleware/ErrorHandler';
import Routes from './routes';
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// database
databaseConnection();

app.use('/', Routes);

// error handler
app.use(errorHandler);

export { app };
