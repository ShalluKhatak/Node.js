import { Router } from 'express';
import { signupController } from '../Controller/signupController.js';

export const signupRoutes = Router();

signupRoutes.get('/', signupController);
