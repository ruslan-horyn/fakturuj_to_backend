import { Router } from 'express';
import expressAsyncHandler from 'express-async-handler';
import { ProductController } from '../../../controllers/products.controller';
import { ProductService } from '../../../services/products.service';
import { validationMiddleware } from '../../../middleware/validation.middleware';
import { createProductDto, updateProductDto } from '../../../dto/product.dto';

const productPath = {
  main: '/products',
  single: '/products/:id',
};

export const productRouters = () => {
  const router = Router();

  const productsService = new ProductService();
  const productController = new ProductController(productsService);

  router
    .get(
      productPath.main,
      expressAsyncHandler(productController.getAll),
    )
    .get(
      productPath.single,
      expressAsyncHandler(productController.getById),
    )
    .post(
      productPath.main,
      validationMiddleware(createProductDto),
      expressAsyncHandler(productController.create),
    )
    .patch(
      productPath.single,
      validationMiddleware(updateProductDto),
      expressAsyncHandler(productController.update),
    )
    .delete(
      productPath.single,
      expressAsyncHandler(productController.delete),
    );

  return router;
};
