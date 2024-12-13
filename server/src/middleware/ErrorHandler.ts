import { NextFunction, Request, Response } from 'express';
import { customError } from '../utils/customError';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof customError) {
		return res.status(err.errorCode).json({ error: err.errorMessage });
	}

	if (err instanceof Error) {
		return res.status(500).json({ error: err.message || 'Internal Server Error' });
	}

	return res.status(500).json({ error: 'Something went wrong' });
};
