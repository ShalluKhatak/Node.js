export const loginMiddleware = (req, res, next) => {
  const data = req.body;
  if (data?.valid) {
    next();
  } else {
    res.send('Not valid');
  }
};
