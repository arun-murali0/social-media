import { NextFunction, Request, Response } from 'express';
import { customError } from '../../utils/customError';
import { userServices } from '../../services/user/user-services';
import { verifyPassword } from '../../utils/jwt/bcrypt-password';
import { generateToken } from '../../utils/jwt/jwt-token';
import { config } from '../../config';

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;

		const user = await userServices.getByEmail(email);
		if (!user) {
			throw new customError(401, 'user Not Found');
		}

		const passwordMatch = verifyPassword(password, user.password);

		if (!passwordMatch) {
			throw new customError(400, 'Please check the password');
		}

		const token = generateToken(user._id!);

		// set Cookies for access token
		res.cookie('accessToken', token.accessToken, {
			httpOnly: true,
			secure: config.NODE_ENV === 'production',
			sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
			maxAge: 15 * 60 * 60 * 1000,
		});

		// set cookies for refresh token
		res.cookie('refreshToken', token.refreshToken, {
			httpOnly: true,
			secure: config.NODE_ENV === 'production',
			sameSite: config.NODE_ENV === 'production' ? 'none' : 'strict',
			maxAge: 3 * 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({ success: true, message: 'login successful' });
	} catch (error) {
		console.error({ error: error.message });
		next(error);
		return;
	}
};
