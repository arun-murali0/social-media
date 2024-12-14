export interface UserProp {
	_id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isAccountVerified: boolean;
}

export interface emailProp {
	to: string;
	subject: string;
	text: string;
	html?: string;
}
