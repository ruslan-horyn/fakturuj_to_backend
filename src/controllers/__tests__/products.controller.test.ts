import { Request, Response } from 'express';
import { ProductService } from '../../services/products.service';
import { ProductController } from '../products.controller';
import { CreateProductRequest, Product, UpdateProductRequest } from '../../models/product.types';

const request = {
  body: {},
  params: {},
};

const response = {
  json: jest.fn(),
};

const createdProduct = {
  id: '1',
  name: 'test',
  price: 100,
  description: 'test',
  category: 'smartphone',
  count: 1,
  productionDate: new Date(),
  createdAt: new Date(),
  updatedAt: new Date(),
} as Product;

const productService = {
  getAll: jest.fn(),
  getById: jest.fn(),
  create: jest.fn(),
  update: jest.fn(),
  delete: jest.fn(),
} as unknown as jest.Mocked<ProductService>;

describe('ProductController', () => {
  const productController = new ProductController(productService);
  it('should call getAll method', async () => {
    productService.getAll.mockResolvedValueOnce([]);
    await productController.getAll(request as Request, response as unknown as Response<Product[]>);
    expect(productService.getAll)
      .toHaveBeenCalled();
  });

  it('should call create method', async () => {
    productService.create.mockResolvedValueOnce(createdProduct);
    await productController.create(request as CreateProductRequest, response as unknown as Response<Product>);
    expect(productService.create)
      .toHaveBeenCalled();

    expect(response.json)
      .toHaveBeenCalledWith(createdProduct);
  });

  it('should throw error on update', async () => {
    expect.hasAssertions();
    const updateProductRequest = {
      body: {
        count: 2,
      },
      params: {
        id: '1',
      },
    } as UpdateProductRequest;

    productService.update.mockRejectedValueOnce(new Error('error on update'));

    try {
      await productController.update(updateProductRequest, response as unknown as Response<Product>);
    } catch (error) {
      expect((error as Error).message)
        .toEqual('error on update');
    }

    expect(productService.update)
      .toHaveBeenCalledWith(updateProductRequest.params.id, updateProductRequest.body);
  });
});
