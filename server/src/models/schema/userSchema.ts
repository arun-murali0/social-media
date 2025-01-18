import mongoose from 'mongoose';
import { userProps } from '../../types';

const userSchema = new mongoose.Schema<userProps>({
	firstName: {
		type: String,
		required: true,
	},
	lastName: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		unique: true,
		required: true,
	},
	password: {
		type: String,
		requires: true,
	},
});

export const user = mongoose.model<userProps>('user', userSchema);
