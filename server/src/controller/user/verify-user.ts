import { NextFunction, Request, Response } from 'express';

export const verifyUser = (_req: Request, _res: Response, next: NextFunction) => {
	try {
	} catch (error) {
		next(error);
		return;
	}
};
