import { Request, Response } from 'express';
import { userServices } from '../../services/user/userServices';
import { TRYCATCH } from '../../middleware/tryCatch';
import { hashPassword } from '../../utils/password-hashing';

export const createNewUser = TRYCATCH(async (req: Request, res: Response) => {
	let userDetails = req.body;
	const checkUser = await userServices.findUserByEmail(userDetails.email);

	if (checkUser) {
		return res.status(301).json({ success: true, message: 'user already registered' });
	} else {
		userDetails.password = hashPassword(userDetails.password);
		await userServices.createNew(userDetails);
		return res.status(200).json({ success: true, message: 'user created successfully' });
	}
});
