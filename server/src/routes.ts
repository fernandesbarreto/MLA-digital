import express from 'express';
import UserController from '@controllers/UserController'
import ProductController from '@controllers/ProductController'

const routes = express.Router();
const userController = new UserController();
const productController = new ProductController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

routes.post('/product', productController.create);
routes.get('/product', productController.get);
routes.delete('/product/:id', productController.delete);
routes.put('/product/:id', productController.update);

export default routes;