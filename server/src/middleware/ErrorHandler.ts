import { NextFunction, Request, Response } from 'express';

export class customError extends Error {
	errorMessage: string;
	errorCode: number;
	constructor(errorMessage: string, errorCode: number) {
		super(errorMessage);
		this.errorCode = errorCode;
		this.errorMessage = errorMessage;
		this.name = 'error';

		Object.setPrototypeOf(this, customError);
	}
}

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
	if (err instanceof customError) {
		return res.status(err.errorCode).json({ error: err.errorMessage, code: err.errorCode });
	}
	_next();
	return res.status(500).json({ message: 'Internal Server Error' });
};
