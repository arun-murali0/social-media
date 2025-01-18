import dotenv from 'dotenv';
dotenv.config();

export const config = {
	PORT: process.env.PORT || 3000,
	MONGO_STRING: process.env.MONGO_STRING,
};
