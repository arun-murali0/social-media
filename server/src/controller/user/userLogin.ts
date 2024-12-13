import { Request, Response } from 'express';
import { customError } from '../../utils/customError';

export const userLogin = async (req: Request, res: Response) => {
	try {
	} catch (error) {
		console.error({ error: error.message });
		throw new customError(400, error.message);
	}
};
