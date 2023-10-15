import { HttpException } from './HttpException';

export const productsException = {
  NOT_FOUND_ID: (id: string) => new HttpException(`Product with id ${id} not found`),
  IS_EXIST: (id: string) => new HttpException(`Product with id ${id} is exist`),
};
