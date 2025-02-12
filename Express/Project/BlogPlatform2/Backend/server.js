import express from 'express';
import cors from 'cors';
import fs from 'fs';

const data = fs.readFileSync('posts.json', 'utf8');
const app = express();
const port = 3000;

app.use(cors());
app.get('/', (req, res) => {
  res.json(data);
});

app.get('/getpost', (req, res) => {
  res.json(JSON.parse(data));
});

app.get('/getpost/post/:id', (req, res) => {
  let id = '';
  if (!!req.params) {
    id = req.params?.id;
  }
  res.json(JSON.parse(data).filter((item) => item?.id == id));
});

app.get('/edit/:id', (req, res) => {
  let id = '';
  if (!!req.params) {
    id = req.params?.id;
  }
  res.json(JSON.parse(data).filter((item) => item?.id == id));
});

app.listen(port, () => {
  console.log('Server is running on: ', port);
});
