import { RequestHandler } from 'express';
import { Schema, ValidationErrorItem, ValidationOptions } from 'joi';
import { StatusCodes } from 'http-status-codes';
import { HttpException } from '../exceptions/HttpException';

const defaultValidationOptions: ValidationOptions = {
  abortEarly: false,
  allowUnknown: true,
};

const getValidationExceptionMessage = (errors: ValidationErrorItem[] = []) => errors
  .map((error: ValidationErrorItem) => error.message)
  .join(', ');

export const validationMiddleware = <T>(
  schema: Schema<T>,
  validationOptions: ValidationOptions = {},
): RequestHandler<unknown, unknown, unknown> => (req, _res, next) => {
    const { body, params } = req;
    const { error } = schema.validate({ body, params }, { ...defaultValidationOptions, ...validationOptions });

    const messages = getValidationExceptionMessage(error?.details);

    if (messages) {
      next(new HttpException(messages, StatusCodes.BAD_REQUEST));
    }

    next();
  };
