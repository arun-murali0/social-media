import { Request, Response } from 'express';
import { customError } from '../../utils/customError';
import { userServices } from 'src/services/user/user-services';

export const createNewUser = async (req: Request, res: Response) => {
	try {
		const user = req.body;
		const checkUser = await userServices.emailService(user.email);

		if (checkUser) {
			throw new customError(400, 'User already registered');
		} else {
			await userServices.newUser(user);
			res.status(200).json({ message: 'user created successfully' });
		}
    
	} catch (error) {
		console.error({ error: error.message });
		throw new customError(400, error.message);
	}
};
