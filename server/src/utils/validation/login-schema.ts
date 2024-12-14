import { z } from 'zod';

export const loginSchema = z.object({
	email: z
		.string()
		.email({ message: 'Please enter valid email' })
		.nonempty({ message: 'email required' }),
	password: z
		.string()
		.nonempty({ message: 'password required' })
		.min(8, { message: 'password should have 8 atleast character' }),
});
