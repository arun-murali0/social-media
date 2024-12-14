import { NextFunction, Request, Response } from 'express';

import { verifyToken } from '../utils/jwt/jwt-token';

// setting user Object
declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

export const checkUserAuth = async (req: Request, _res: Response, next: NextFunction) => {
	const token = req.cookies['accessToken'];
	if (!token) {
		_res.status(401).json({ error: 'unAuthorized User please login ' });
	}
	try {
		const decodeToken = verifyToken(token);
		req.user = decodeToken;
		next();
	} catch (error) {
		next(error);
		return;
	}
};
