import type { Context } from 'hono';

export const createNewUser = (c: Context) => {
	return c.json({ message: 'hello' });
};
