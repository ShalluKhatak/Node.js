import express from 'express';
import jwt from 'jsonwebtoken';
const secret_key = 'Secret_key_123';
var token = jwt.sign('password123', secret_key);

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send(token);
});

app.get('/login', (req, res) => {
  res.send('login');
});

app.get('/signup', (req, res) => {
  res.send('signup');
});

app.get('/logout', (req, res) => {
  res.send('logout');
});

app.listen(port, () => {
  console.log('Server is runing on port :', port);
});
