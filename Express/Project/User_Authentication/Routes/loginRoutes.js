import { Router } from 'express';
import {
  loginController,
  loginControllerPost,
} from '../Controller/loginController.js';
import { loginMiddleware } from '../Middleware/loginMiddleware.js';

export const loginRoutes = Router();

// loginRoutes.get('/', loginController);
// loginRoutes.post('/', loginMiddleware, loginControllerPost);
loginRoutes.post('/', loginControllerPost);
