// const express = require('express')
import { BodyFunction } from './Auth.js';
import express from 'express';
const app = express();
const port = 3000;

// app.use(BodyFunction);
// app.use((req, res, next) => {
//   console.log('test 1');
//   next();
// });
// app.use((req, res, next) => {
//   res.send('test 2');
//   next();
// });
// app.use((req, res) => {
//   console.log('test 3');
// });

app.get('/', BodyFunction, (req, res) => {
  const var_test = req.result;
  res.send(var_test);
});

app.get('/about', (req, res) => {
  res.send('This is all about me!');
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
