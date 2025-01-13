import type { Context } from 'hono';

export const userLogin = (c: Context) => {
	return c.json({ message: 'hello' });
};
