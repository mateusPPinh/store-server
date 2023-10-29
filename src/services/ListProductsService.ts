import { connectionDB } from '../config/ormconfig';
import { Product } from '../entity/Products';

export class ListProductsService {
  async execute(): Promise<Product[]> {
    const repository = connectionDB.getRepository(Product);
    const products = await repository.find();
    return products;
  }
}
