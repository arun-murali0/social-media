import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import router from './routes/index.js';

const app = new Hono();

app.route('/', router);

console.log('server running');

serve(app);
