import mongoose from 'mongoose';
import { UserProp } from '../../types';

const userDetails = new mongoose.Schema<UserProp>({
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
		required: true,
	},
	isAccountVerified: {
		type: Boolean,
		default: false,
	},
});

export const User = mongoose.model<UserProp>('User', userDetails);
