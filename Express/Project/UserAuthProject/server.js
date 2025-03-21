import express from 'express';
import dotenv from 'dotenv'; //fetch .env config
import cookieParser from 'cookie-parser'; //fetch or send data in cookies
import { homeRoutes } from './router/homeRoutes.js';
import { signupRoutes } from './router/signupRoutes.js';
import { loginRoutes } from './router/loginRoutes.js';
import { logoutRouter } from './router/logoutRouter.js';

dotenv.config(); //config .env
const app = express();
const port = 3000;
app.use(express.json()); //Fetch JSON data
app.use(express.urlencoded()); //Fetch data from form.
app.use(express.static('public')); //serve public files.
app.use(cookieParser());

app.use('/', homeRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRouter);

app
  .listen(port, () => {
    console.log('The server is running on port :', port);
  })
  .on('error', (err) => {
    console.log('Failed to start server:', err);
  });
