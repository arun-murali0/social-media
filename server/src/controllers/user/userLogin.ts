import { Request, Response } from 'express';
import { TRYCATCH } from '../../middleware/tryCatch';
import { userServices } from '../../services/user/userServices';
import { verifyPassword } from '../../utils/password-hashing';

export const userLogin = TRYCATCH(async (req: Request, res: Response) => {
	const { email, password } = req.body;
	const checkUser = await userServices.findUserByEmail(email);
	const checkPassword = verifyPassword(password, checkUser?.password!);

	if (!checkUser) {
		return res.status(400).json({ success: true, message: 'user Not found' });
	}

	if (!checkPassword) {
		return res.status(400).json({ success: true, message: 'password mismatch' });
	}

	return res.status(200).json({ success: true, message: 'user Login successfully' });
});
