export const loginController = (req, res) => {
  res.send('Login');
};

export const loginControllerPost = (req, res) => {
  const data = req?.body;
  res.send(data?.test_key);
};
