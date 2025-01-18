import { Router } from 'express';
import userRoutes from './user';
import appRoutes from './app';

const router = Router();

router.use('/api/auth', userRoutes);
router.use('/api', appRoutes);

export default router;
