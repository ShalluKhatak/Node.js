export const loginMiddleware = (req, res, next) => {
  let data = req.body;
  data['test_key'] = `Hello ${data['name']} fruit`;
  if (data?.valid) {
    next();
  } else {
    res.send('Not valid');
  }
};
