import { Hono } from 'hono';
import { createNewUser } from '../controllers/user/createNewUser.js';
import { userLogin } from '../controllers/user/userLogin.js';
import { userLogout } from '../controllers/user/logout.js';

const router = new Hono();

router.post('/sign-up', createNewUser);
router.post('/sign-in', userLogin);
router.post('/sign-out', userLogout);

export default router;
