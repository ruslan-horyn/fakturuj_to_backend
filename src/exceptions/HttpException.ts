import { StatusCodes } from 'http-status-codes';

export class HttpException extends Error {
  status: number;

  constructor(message: string, status = StatusCodes.NOT_FOUND) {
    super(message);
    this.status = status;
  }
}
