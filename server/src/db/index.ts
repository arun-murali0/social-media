import mongoose from 'mongoose';
import { config } from '../config';

export const databaseConnection = async () => {
	try {
		const connection = await mongoose.connect(config.MONGO_STRING!);

		if (connection) {
			console.info('connection established');
		}
	} catch (error) {
		console.error({ error: error.message });
		process.exit(1);
	}
};
