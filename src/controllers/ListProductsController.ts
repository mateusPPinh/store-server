import { Request, Response } from 'express';
import { ListProductsService } from '../services/ListProductsService';

export class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const service = new ListProductsService();
    const products = await service.execute();
    return response.json(products);
  }
}
