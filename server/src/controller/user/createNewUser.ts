import { NextFunction, Request, Response } from 'express';
import { customError } from '../../utils/customError';
import { userServices } from '../../services/user/user-services';
import { generateToken } from '../../utils/jwt/jwt-token';
import { passwordToHash } from '../../utils/jwt/bcrypt-password';
import { config } from '../../config';

export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = req.body;
		const checkUser = await userServices.getByEmail(user.email);

		if (checkUser) {
			throw new customError(400, 'User already registered');
		} else {
			// hashing a password
			user.password = passwordToHash(user.password);

			await userServices.newUser(user);

			const token = generateToken(user._id);

			// set Cookie
			res.cookie('accessToken', token.accessToken, {
				httpOnly: true,
				maxAge: 15 * 50 * 60 * 1000,
				secure: config.NODE_ENV === 'production',
				sameSite: config.NODE_ENV === 'production' ? 'strict' : 'none',
			});

			// set Cookie
			res.cookie('refreshToken', token.refreshToken, {
				httpOnly: true,
				maxAge: 3 * 24 * 50 * 60 * 1000,
				secure: config.NODE_ENV === 'production',
				sameSite: config.NODE_ENV === 'production' ? 'strict' : 'none',
			});

			res.status(200).json({ success: true, message: 'user created successfully' });
		}
	} catch (error) {
		console.error({ error: error.message });
		next(error);
		return;
	}
};
