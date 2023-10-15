/* eslint-disable sonarjs/no-duplicate-string */
import { Product } from '../models/product.types';

export const appEnvironments = {
  PROD: 'production',
  DEV: 'development',
} as const;

const productsEntity: Product[] = [
  {
    id: '1697314334912',
    name: 'Smartphone 1',
    price: 100,
    count: 2000,
    category: 'smartphone',
    productionDate: '2022-01-10T00:00:00.000Z',
    description: 'description 1',
    createdAt: '2023-10-14T20:20:23.985Z',
    updatedAt: '2023-10-14T20:20:23.985Z',
  },
  {
    id: '1697314334913',
    name: 'Smartphone 2',
    price: 100,
    count: 2000,
    category: 'smartphone',
    productionDate: '2022-01-11T00:00:00.000Z',
    description: 'description 2',
    createdAt: '2023-10-14T20:20:23.985Z',
    updatedAt: '2023-10-14T20:20:23.985Z',
  },
  {
    id: '1697314334914',
    name: 'Smartphone 3',
    price: 100,
    count: 2000,
    category: 'smartphone',
    productionDate: '2022-01-12T00:00:00.000Z',
    description: 'description 2',
    createdAt: '2023-10-14T20:20:23.985Z',
    updatedAt: '2023-10-14T20:20:23.985Z',
  },
] as unknown as Product[];

export const defaultProductsMap = new Map<string, Product>(
  productsEntity.map((product) => [product.id, product]),
);
