import { Router } from 'express';
import { HomeController } from '../Controller/HomeController.js';

export const homeRoutes = Router();
homeRoutes.get('/', HomeController);
