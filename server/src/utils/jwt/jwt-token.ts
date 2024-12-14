import jwt from 'jsonwebtoken';
import { config } from '../../config';

// generating a token
export const generateToken = (userId: string) => {
	// access token for user
	const accessToken = jwt.sign({ id: userId }, config.JWT_SECRET!, {
		expiresIn: config.JWT_EXPIRES_IN!,
	});

	// Refresh token for access Token
	const refreshToken = jwt.sign({ id: userId }, config.JWT_REFRESH_SECRET!, {
		expiresIn: config.JWT_REFRESH_Expiry!,
	});

	return { accessToken, refreshToken };
};

// verify generated Token
export const verifyToken = (token: string) => {
	return jwt.verify(token, config.JWT_SECRET!);
};
