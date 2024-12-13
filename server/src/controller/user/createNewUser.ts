import { NextFunction, Request, Response } from 'express';
import { customError } from '../../utils/customError';
import { userServices } from '../../services/user/user-services';
import { generateToken } from '../../utils/jwt/jwt-token';
import { passwordToHash } from '../../utils/jwt/bcrypt-password';
// import { config } from '../../config';

export const createNewUser = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const user = req.body;
		const checkUser = await userServices.emailService(user.email);

		if (checkUser) {
			throw new customError(400, 'User already registered');
		} else {
			// hashing a password
			user.password = passwordToHash(user.password);

			await userServices.newUser(user);

			const token = generateToken(user._id);

			res.cookie('token', token, {
				httpOnly: true,
				maxAge: 24 * 60 * 60 * 1000,
			});

			res.status(200).json({ message: 'user created successfully' });
		}
	} catch (error) {
		console.error({ error: error.message });
		next(error);
		return;
	}
};
