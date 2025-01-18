import { NextFunction, Response, Request } from 'express';

export const TRYCATCH =
	(controller: any) => async (_req: Request, _res: Response, next: NextFunction) => {
		try {
			await controller(_req, _res);
			next();
		} catch (error) {
			next();
		}
	};
