import { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';

export const validateSchema = (schema: ZodSchema<any>) => {
	return async (req: Request, _res: Response, next: NextFunction) => {
		try {
			await schema.parseAsync(req.body);
			next();
		} catch (error) {
			next(error);
		}
	};
};
