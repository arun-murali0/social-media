import { z } from 'zod';

export const LoginSchema = z.object({
	email: z.string().email(),
	password: z.string().min(8, { message: 'password should have atleast 8 character' }),
});

export type LoginSchemaType = z.infer<typeof LoginSchema>;
