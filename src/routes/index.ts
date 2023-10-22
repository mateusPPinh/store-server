import {Router} from 'express';

const routes = Router();

// for check if server is OK
routes.get('/healf-check', (request, response) => {
  response.json({ ok: 'server is OK' })
})

export default routes;