import {Router} from 'express';
import { CreateProductController } from '../controllers/CreateProductController';
import { ListProductsController } from '../controllers/ListProductsController';

const routes = Router();

// for check if server is OK
routes.get('/healf-check', (request, response) => {
  response.json({ ok: 'server is OK' })
})

routes.post('/create-product', new CreateProductController().handle)
routes.get('/products', new ListProductsController().handle);

export default routes;