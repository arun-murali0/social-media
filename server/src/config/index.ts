import dotenv from 'dotenv';
dotenv.config();

export const config = {
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
	MONGO_STRING: process.env.MONGO_STRING,
	NODE_ENV : process.env.NODE_ENV,
	JWT_EXPIRES_IN: '1d',
};
