import { Router } from 'express';
import { createNewUser, userLogin } from '../controller';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);
router.post('/sign-in', userLogin);

export default router;
