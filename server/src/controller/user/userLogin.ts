import { NextFunction, Request, Response } from 'express';
import { customError } from '../../utils/customError';
import { userServices } from '../../services/user/user-services';
import { verifyPassword } from '../../utils/jwt/bcrypt-password';
import { generateToken } from '../../utils/jwt/jwt-token';

export const userLogin = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { email, password } = req.body;

		const user = await userServices.emailService(email);
		if (!user) {
			throw new customError(401, 'user Not Found');
		}

		const passwordMatch = verifyPassword(password, user.password);

		if (!passwordMatch) {
			throw new customError(400, 'Please check the password');
		}

		const token = generateToken(user._id!);

		// set Cookies
		res.cookie('token', token, {
			httpOnly: true,
			maxAge: 24 * 60 * 60 * 1000,
		});

		return res.status(200).json({ message: 'login successful' });
	} catch (error) {
		console.error({ error: error.message });
		next(error);
		return;
	}
};
