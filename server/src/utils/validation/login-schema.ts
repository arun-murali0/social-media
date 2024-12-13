import { z } from 'zod';

export const loginSchema= z.object({
	email: z.string().email({ message: 'Please enter valid email' }),
	password: z.string().min(8, { message: 'password should have 8 atleast character' }),
});
