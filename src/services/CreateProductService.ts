import { connectionDB } from '../config/ormconfig';
import {Product} from '../entity/Products'

interface ProductsRequest {
  title: string;
  description: string;
  price: number;
  isAvaliable: boolean;
  product_image: string;
}

export class CreateProductService {
  async execute({description, isAvaliable, price, product_image, title}: ProductsRequest): Promise<Product> {
    const repositorie = connectionDB.getRepository(Product)

    const products = repositorie.create({
      description,
      isAvaliable,
      price, 
      product_image, 
      title
    })

    await repositorie.save(products)
    return products
  }
}