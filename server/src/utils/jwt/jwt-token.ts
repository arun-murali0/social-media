import jwt from 'jsonwebtoken';
import { config } from '../../config';

// generating a token
export const generateToken = (userId: string): string => {
	return jwt.sign({ id: userId }, config.JWT_SECRET!, {
		expiresIn: config.JWT_EXPIRES_IN!,
	});
};

// verify generated Token
export const verifyToken = (token: string) => {
	return jwt.verify(token, config.JWT_SECRET!);
};
