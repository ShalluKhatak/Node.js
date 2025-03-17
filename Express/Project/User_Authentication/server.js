import express from 'express';
import dotenv from 'dotenv';
import { signupRoutes } from './Routes/signupRoutes.js';
import { homeRoutes } from './Routes/homeRoutes.js';
import { loginRoutes } from './Routes/loginRoutes.js';
import { logoutRouter } from './Routes/logoutRouter.js';

dotenv.config();
const app = express();
// const port = process.env.PORT || 3000;
const port = 3000;
app.use(express.json()); //Fetch JSON data
app.use(express.urlencoded()); //Fetch data from form.
app.use(express.static('public')); //serve public files.

app.use('/', homeRoutes);
app.use('/signup', signupRoutes);
app.use('/login', loginRoutes);
app.use('/logout', logoutRouter);

app.listen(port, () => {
  console.log('Server is runing on port :', port);
});

// /signup
// /logout
// /login
// /home
