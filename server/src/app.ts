import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';

import { databaseConnection } from './db';
import { errorHandler } from './middleware/ErrorHandler';
import Routes from './routes';
import { morganLogger } from './utils/logger';
import { config } from './config';
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morganLogger);
app.use(
	cors({
		credentials: true,
	})
);
app.use(helmet());
app.use(cookieParser(config.JWT_SECRET));

// database
databaseConnection();

// Routes
app.use('/', Routes);

// error handler
app.use(errorHandler);

export { app };
