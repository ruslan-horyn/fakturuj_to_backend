import { defaultProductsMap } from '../config/constants';
import { productsException } from '../exceptions/products.exception';
import { Product, ProductBody } from '../models/product.types';

export class ProductService {
  private readonly products = defaultProductsMap;

  async getAll(): Promise<Product[]> {
    return Promise.resolve([...this.products.values()]);
  }

  async getById(id: string): Promise<Product> {
    const product = this.products.get(id);

    if (!product) {
      throw productsException.NOT_FOUND_ID(id);
    }

    return Promise.resolve(product);
  }

  async create(data: ProductBody): Promise<Product> {
    const id = Date.now()
      .toString();
    const newProduct = {
      ...data,
      id,
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    this.products.set(id, newProduct);

    return Promise.resolve(newProduct);
  }

  async update(id: string, data: Partial<ProductBody>): Promise<Product> {
    const product = this.products.get(id);

    if (!product) {
      throw productsException.NOT_FOUND_ID(id);
    }

    const newProduct = {
      ...product,
      ...data,
      updatedAt: new Date(),
    };

    return Promise.resolve(newProduct);
  }

  async delete(id: string): Promise<void> {
    const product = this.products.get(id);

    if (!product) {
      throw productsException.NOT_FOUND_ID(id);
    }

    this.products.delete(id);

    return Promise.resolve();
  }
}
