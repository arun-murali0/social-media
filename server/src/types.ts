export interface UserProp {
	_id?: string;
	firstName: string;
	lastName: string;
	email: string;
	password: string;
	isAccountVerified: boolean;
}

export interface EmailTemplateProp {
	subject: string;
	text: string;
	html?: string;
}

export interface EmailOptionProp {
	to: string;
	type?: any;
	params: any;
}
