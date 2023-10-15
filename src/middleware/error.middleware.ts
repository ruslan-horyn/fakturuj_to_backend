import { ErrorRequestHandler } from 'express';
import { StatusCodes } from 'http-status-codes';
import { configEnv } from '../config/configEnv';
import { HttpException } from '../exceptions/HttpException';
import { appEnvironments } from '../config/constants';

export const errorMiddleware: ErrorRequestHandler = (error: Error, _req, res, next) => {
  const { nodeEnv } = configEnv;

  let status = StatusCodes.INTERNAL_SERVER_ERROR;

  if (error instanceof HttpException) {
    status = error.status;
  }

  const message = error.message || 'Something went wrong';
  const stack = nodeEnv === appEnvironments.DEV ? error.stack : null;

  res.status(status)
    .send({
      status,
      message,
      stack,
    });
  next(stack);
};
