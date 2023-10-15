import { Request } from 'express';
import { Prettify, ValueOf } from '../utils/types';

export const productsCategoryEntity = {
  LAPTOP: 'laptop',
  SMARTPHONE: 'smartphone',
  TABLET: 'tablet',
} as const;

export type ProductCategory = ValueOf<typeof productsCategoryEntity>;

export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  count: number;
  category: ProductCategory
  productionDate: Date
  createdAt: Date
  updatedAt: Date
};

export type ProductBody = Prettify<Omit<Product, 'id' | 'createdAt' | 'updatedAt'>>;
export type CreateProductBody = ProductBody;
export type UpdateProductBody = Partial<ProductBody>;

export type CreateProductRequest = Request<unknown, unknown, CreateProductBody>;
export type UpdateProductRequest = Request<{ id : string }, unknown, CreateProductBody>;
