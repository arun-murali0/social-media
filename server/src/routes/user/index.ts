import { Router } from 'express';
import { createNewUser, userLogin, userLogout } from '../../controllers';

const router = Router();

router.post('/sign-up', createNewUser);
router.post('/sign-in', userLogin);
router.post('/sign-out', userLogout);

export default router;
