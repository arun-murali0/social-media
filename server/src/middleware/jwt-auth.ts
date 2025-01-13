import { sign, verify } from 'hono/jwt';
import { Config } from '../config/index.js';
import type { JWTPayload } from 'hono/utils/jwt/types';

export const generateToken = (userID: JWTPayload) => {
	const accessToken = sign(userID, Config.JWT_SECRET!);
	return accessToken;
};

export const verifyToken = (token: string) => {
	return verify(token, Config.JWT_SECRET!);
};
