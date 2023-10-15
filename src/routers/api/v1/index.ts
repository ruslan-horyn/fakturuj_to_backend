import { Router } from 'express';
import { productRouters } from './products.router';

export const routers: Router[] = [
  productRouters(),
];
