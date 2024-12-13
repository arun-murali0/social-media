export interface UserProp {
	_id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	verifyOtp?: string;
	isAccountVerified?: boolean;
	resetOtp?: string;
	resetOtpExpiryAt?: number;
	verifyOtpExpiryAt?: number;
}
