import { NextFunction, Request, Response } from 'express';
import { userServices } from '../../services/user/user-services';
import { customError } from '../../utils/customError';
import { passwordToHash } from '../../utils/jwt/bcrypt-password';

export const resetPassword = async (req: Request, res: Response, next: NextFunction) => {
	try {
		const { id } = req.user;
		const { newPassword } = req.body;
		const user = await userServices.getDataServices(id);

		const changePassword = (user!.password = passwordToHash(newPassword));
		if (!changePassword) {
			throw new customError(400, 'Error changing in password');
		}
		return res
			.status(200)
			.json({ success: 'true', message: 'password changed successfully', user, changePassword });
	} catch (error) {
		next(error);
		return;
	}
};
