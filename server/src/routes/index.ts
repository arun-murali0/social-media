import { Router } from 'express';
import { createNewUser, userLogin, userLogOut, verifyUser, resetPassword } from '../controller';

// middleware
import { checkUserAuth } from '../middleware/user-auth';

// schema
import { validateSchema } from '../middleware/input-validation';
import { loginSchema } from '../utils/validation/login-schema';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);
router.post('/sign-in', validateSchema(loginSchema), userLogin);
router.post('/verify-otp', verifyUser);

// protected user Routes
router.post('/sign-out', checkUserAuth, userLogOut);
router.post('/reset-password', checkUserAuth, resetPassword);

export default router;
