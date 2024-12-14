import dotenv from 'dotenv';
dotenv.config();

export const config = {
	PORT: process.env.PORT,
	JWT_SECRET: process.env.JWT_SECRET,
	MONGO_STRING: process.env.MONGO_STRING,
	NODE_ENV: process.env.NODE_ENV,
	JWT_EXPIRES_IN: '15m',
	JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET,
	JWT_REFRESH_Expiry: '3d',
	SMTP_USER: process.env.SMTP_USER,
	SMTP_SECRET: process.env.SMTP_SECRET,
	SENDER_EMAIL: process.env.SECRET_EMAIL,
	SMTP_PORT: process.env.SMTP_PORT,
	SMTP_SERVER: process.env.SMTP_SERVER,
};
