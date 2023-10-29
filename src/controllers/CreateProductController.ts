import {Request, Response} from 'express';
import { CreateProductService } from '../services/CreateProductService';

export class CreateProductController {
  async handle(request: Request, response: Response) {
    const {description, price, isAvaliable, title, product_image} = request.body;

    const service = new CreateProductService();

    const result = await service.execute({ description, price, title, isAvaliable, product_image })
    console.log(result, 'should appear here')

    if (result instanceof Error) {
      return response.status(400).json(result.message)
    }

    return response.json(result)
  }
}