import bcrypt from 'bcrypt';

export const passwordToHash = (password: string) => {
	const saltRounds = 10;
	const salt = bcrypt.genSaltSync(saltRounds);
	return bcrypt.hashSync(password, salt);
};

export const verifyPassword = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
