import type { Context } from 'hono';

export const userLogout = (c: Context) => {
	return c.json({ message: 'hello' });
};
