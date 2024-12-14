import { Router } from 'express';
import { createNewUser, userLogin, userLogOut, verifyUser } from '../controller';

// schema
import { validateSchema } from '../middleware/input-validation';
import { loginSchema } from '../utils/validation/login-schema';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);
router.post('/sign-in', validateSchema(loginSchema), userLogin);
router.post('/sign-out', userLogOut);
router.post('/verify-otp', verifyUser);

export default router;
