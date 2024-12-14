import { NextFunction, Request, Response } from 'express';

export const verifyUser = (req: Request, res: Response, next: NextFunction) => {
	try {



    
	} catch (error) {
		next(error);
		return;
	}
};
