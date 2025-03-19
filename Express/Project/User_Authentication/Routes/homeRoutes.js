import { Router } from 'express';
import { HomeController } from '../Controller/HomeController.js';
import { authenticateJWT } from '../Middleware/validateToken.js';

export const homeRoutes = Router();
homeRoutes.get('/', authenticateJWT, HomeController);
