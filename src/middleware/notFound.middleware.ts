import { RequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';

export const notFoundMiddleware: RequestHandler = (_req, res) => {
  res.sendStatus(StatusCodes.NOT_FOUND);
};
