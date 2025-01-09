import jwt from 'jsonwebtoken';
import { config } from '../../config';

// generating a token
export const generateToken = {
	// access token for user
	accessToken: (userId: string) => {
		return jwt.sign({ id: userId }, config.JWT_SECRET!, {
			expiresIn: config.JWT_EXPIRES_IN!,
		});
	},
	// Refresh token for access Token
	refreshToken: (userId: string) => {
		return jwt.sign({ id: userId }, config.JWT_REFRESH_SECRET!, {
			expiresIn: config.JWT_REFRESH_Expiry!,
		});
	},
};

// verify generated Token
export const verifyToken = (token: string) => {
	return jwt.verify(token, config.JWT_SECRET!);
};
