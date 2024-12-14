import { NextFunction, Request, Response } from 'express';
import { config } from '../../config';

export const userLogOut = (_req: Request, res: Response, next: NextFunction) => {
	try {
		res.clearCookie('accessToken', {
			httpOnly: true,
			secure: config.NODE_ENV === 'production',
			sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
		});

		res.clearCookie('refreshToken', {
			httpOnly: true,
			secure: config.NODE_ENV === 'production',
			sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
		});

		return res.status(200).json({ success: true, message: 'logOut successful' });
	} catch (error) {
		next(error);
		return;
	}
};
