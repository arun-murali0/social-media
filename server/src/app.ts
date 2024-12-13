import express from 'express';
import { databaseConnection } from './db';
import { errorHandler } from './middleware/ErrorHandler';
import cors from 'cors';
import helmet from 'helmet';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(helmet());

// database
databaseConnection();

// error handler
app.use(errorHandler);

export { app };
