import { NextFunction, Request, Response } from 'express';
import { APP_PASSWORD } from './constants';
import logger from './logger.config';

export const auth = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || authHeader !== `Bearer ${APP_PASSWORD}`) {
    return res.status(200).json();
  }
  next();
};
