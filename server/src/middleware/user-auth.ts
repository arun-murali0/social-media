import { NextFunction, Request, Response } from 'express';
import { verifyToken, generateToken } from '../utils/jwt/jwt-token';

// setting user Object
declare global {
	namespace Express {
		interface Request {
			user?: any;
		}
	}
}

export const protectedRoutes = async (req: Request, res: Response, next: NextFunction) => {
	const accessToken = req.cookies['accessToken'];
	const refreshToken = req.cookies['refreshToken'];

	if (!accessToken && !refreshToken) {
		res.clearCookie('accessToken');
		res.clearCookie('refreshToken');
		return res.status(401).redirect('/sign-in');
	}

	try {
		// Verify Access Token
		const decodeToken = verifyToken(accessToken);
		req.user = decodeToken;
		next();
	} catch (error) {
		// If access token fails, try to refresh
		if (refreshToken) {
			try {
				const decodedRefreshToken = verifyToken(refreshToken);

				// Generate new access token
				const newAccessToken = generateToken.accessToken(decodedRefreshToken.id as string);
				res.cookie('accessToken', newAccessToken, { httpOnly: true, sameSite: 'strict' });

				req.user = decodedRefreshToken;
				return next();
			} catch (refreshError) {
				res.clearCookie('refreshToken');
				return res.status(403).redirect('/sign-in');
			}
		} else {
			res.clearCookie('accessToken');
			return res.status(401).redirect('/sign-in');
		}
	}
};
