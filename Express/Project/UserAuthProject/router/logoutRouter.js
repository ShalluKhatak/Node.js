import router from 'express';
import { logoutController } from '../controller/logoutController.js';

export const logoutRouter = router();

logoutRouter.get('/', logoutController);
