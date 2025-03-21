import { Router } from 'express';
import { homeController } from '../controller/homeController.js';

export const homeRoutes = Router();

homeRoutes.get('/', homeController);
