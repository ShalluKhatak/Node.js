export const BodyFunction = (req, res, next) => {
  const body = true;
  if (body) {
    req.result = 'test 1';
    next();
    // return result;
  }
};
