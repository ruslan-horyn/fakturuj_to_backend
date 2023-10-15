import Joi from 'joi';
import { ProductBody, productsCategoryEntity } from '../models/product.types';

const MAX_PRODUCT_DESCRIPTION_LENGTH = 2000;
const MIN_VALUE = 0;

export const createProductDto = Joi.object<ProductBody>({
  name: Joi.string()
    .required(),
  price: Joi.number()
    .min(MIN_VALUE)
    .required(),
  description: Joi.string()
    .max(MAX_PRODUCT_DESCRIPTION_LENGTH)
    .required(),
  count: Joi.number()
    .min(MIN_VALUE)
    .required(),
  category: Joi.string()
    .valid(...Object.values(productsCategoryEntity))
    .required(),
  productionDate: Joi.date()
    .required(),
});

export const updateProductDto = Joi.object<Partial<ProductBody>>({
  name: Joi.string(),
  price: Joi.number()
    .min(MIN_VALUE),
  description: Joi.string()
    .max(MAX_PRODUCT_DESCRIPTION_LENGTH),
  count: Joi.number()
    .min(MIN_VALUE),
  category: Joi.string()
    .valid(...Object.values(productsCategoryEntity)),
  productionDate: Joi.date(),
});
