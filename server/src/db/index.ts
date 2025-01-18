import mongoose from 'mongoose';
import { config } from '../config';

export const databaseConnection = async () => {
	try {
		const connection = await mongoose.connect(config.MONGO_STRING!);
		if (connection) {
			console.info('db connected');
		}
	} catch (error) {
		console.error(error);
	}
};
