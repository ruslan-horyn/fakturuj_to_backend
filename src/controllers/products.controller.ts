import { Request, Response } from 'express';
import { ProductService } from '../services/products.service';
import { CreateProductRequest, Product, UpdateProductRequest } from '../models/product.types';

export class ProductController {
  constructor(
    private readonly productsService: ProductService,
  ) {}

  getAll = async (_req: Request, res: Response<Product[]>): Promise<void> => {
    const products = await this.productsService.getAll();
    res.json(products);
  };

  getById = async (req: Request<{ id: string }>, res: Response<Product>): Promise<void> => {
    const { id } = req.params;
    const products = await this.productsService.getById(id);
    res.json(products);
  };

  create = async (req: CreateProductRequest, res: Response<Product>): Promise<void> => {
    const products = await this.productsService.create(req.body);
    res.json(products);
  };

  update = async (req: UpdateProductRequest, res: Response<Product>): Promise<void> => {
    const { id } = req.params;
    const products = await this.productsService.update(id, req.body);
    res.json(products);
  };

  delete = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
    const { id } = req.params;
    await this.productsService.delete(id);
    res.send();
  };
}
