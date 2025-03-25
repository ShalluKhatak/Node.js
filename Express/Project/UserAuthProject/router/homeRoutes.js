import { Router } from 'express';
import { homeController } from '../controller/homeController.js';
import { loginMiddleware } from '../middleware/loginMiddleware.js';

export const homeRoutes = Router();

homeRoutes.get('/', loginMiddleware, homeController);
// homeRoutes.get('/', homeController);
