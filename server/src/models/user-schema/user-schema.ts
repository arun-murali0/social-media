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
	verifyOtp: {
		type: String,
		default: '',
	},
	verifyOtpExpiryAt: {
		type: Number,
		default: 0,
	},
	resetOtp: {
		type: String,
		default: '',
	},
	resetOtpExpiryAt: {
		type: Number,
		default: 0,
	},
});

export const User = mongoose.model<UserProp>('User', userDetails);
