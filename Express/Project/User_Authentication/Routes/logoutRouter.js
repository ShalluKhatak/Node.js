import { Router } from 'express';
import { logoutController } from '../Controller/logoutController.js';

export const logoutRouter = Router();

logoutRouter.get('/', logoutController);
