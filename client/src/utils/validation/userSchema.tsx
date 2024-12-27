import { z } from 'zod';

export const userSchema = (type: string) => {
	return z.object({
		firstName:
			type === 'sign-up'
				? z.string().optional()
				: z.string().min(3, { message: 'firstName should contain atleast 3 character' }),
		lastName:
			type === 'sign-up'
				? z.string().optional()
				: z.string().min(3, { message: 'lastName should contain atleast 3 character' }),

		// login
		email: z.string().min(1, { message: 'please enter Email' }).email(),
		password: z.string().min(8, { message: 'password should be minimum 8 character' }),
	});
};
