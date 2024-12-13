import { NextFunction, Request, Response } from 'express';
import { customError } from '../utils/customError';
import { ZodError } from 'zod';

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	// custom error
	if (err instanceof customError) {
		return res.status(err.errorCode).json({ success: 'false', error: err.errorMessage });
	}

	// zod validation error
	if (err instanceof ZodError) {
		return res.status(400).json({
			success: 'false',
			error: err.errors.map((issue) => {
				const field = issue.path.join('.');
				return `${field}:-> reason: ${issue.message}`;
			}),
		});
	}

	// system error
	if (err instanceof Error) {
		return res
			.status(500)
			.json({ success: 'false', error: err.message || 'Internal Server Error' });
	}

	// default error
	return res.status(500).json({ success: 'false', error: 'Something went wrong' });
};
