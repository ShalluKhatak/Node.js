import router from 'express';
import {
  loginController,
  loginControllerPost,
} from '../controller/loginController.js';
import { loginMiddleware } from '../middleware/loginMiddleware.js';

export const loginRoutes = router();

loginRoutes.get('/', loginController);
loginRoutes.post('/', loginControllerPost);
