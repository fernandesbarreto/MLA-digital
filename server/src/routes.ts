import express from 'express';
import UserController from '@controllers/UserController'
import ApoioController from '@controllers/ApoioController';

const routes = express.Router();
const userController = new UserController();

routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

const apoioController = new ApoioController();

routes.post('/support', apoioController.create);
routes.get('/support', apoioController.get);
routes.delete('/support/:id', apoioController.delete);
routes.put('/support/:id', apoioController.update);

export default routes;