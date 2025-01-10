import { Request, Response, Router } from 'express';
import { createNewUser, userLogin, userLogOut, verifyUser, resetPassword } from '../controller';

// middleware
// import { protectedRoutes } from '../middleware/user-auth';

// schema
import { validateSchema } from '../middleware/input-validation';
import { loginSchema } from '../utils/validation/login-schema';

const router = Router();

// user Routes
router.post('/sign-up', createNewUser);
router.post('/sign-in', validateSchema(loginSchema), userLogin);
router.post('/verify-otp', verifyUser);

router.get('/home', (_req: Request, res: Response) => {
	return res.status(200).json({ message: 'hello world' });
});

// protected user Routes
router.post('/sign-out', userLogOut);
router.post('/reset-password',  resetPassword);

export default router;
