import bcrypt from 'bcrypt';

export const hashPassword = (password: string) => {
	const saltRound = 10;
	const hashRound = bcrypt.genSaltSync(saltRound);
	return bcrypt.hashSync(password, hashRound);
};

export const verifyPassword = (password: string, hashedPassword: string) => {
	return bcrypt.compareSync(password, hashedPassword);
};
