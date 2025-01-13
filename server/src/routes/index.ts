import { Hono } from 'hono';
import userRouter from './userRouter.js';
import appRouter from './appRouter.js';

const app = new Hono().basePath('/api');

app.route('/auth', userRouter);
app.route('/app', appRouter);

export default app;
