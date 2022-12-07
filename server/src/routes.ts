import express from 'express';
import UserController from '@controllers/UserController'
import ApoioController from '@controllers/ApoioController';
import CardFeedbackController from '@controllers/CardFeedbackController';

const routes = express.Router();
const userController = new UserController();
const cardFeedbackController = new CardFeedbackController();

// User
routes.post('/user', userController.create);
routes.get('/user', userController.get);
routes.delete('/user/:id', userController.delete);
routes.put('/user/:id', userController.update);

const apoioController = new ApoioController();

routes.post('/support', apoioController.create);
routes.get('/support', apoioController.get);
routes.delete('/support/:id', apoioController.delete);
routes.put('/support/:id', apoioController.update);

// Controller
routes.post('/feedback', cardFeedbackController.create);
routes.get('/feedback', cardFeedbackController.get);
routes.delete('/feedback/:id', cardFeedbackController.delete);
routes.put('/feedback/:id', cardFeedbackController.update);

export default routes;