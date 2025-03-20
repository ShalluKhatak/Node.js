export const logoutController = (req, res) => {
  res.clearCookie('token');
  res.send('Logout');
};
