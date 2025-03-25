export const logoutController = (req, res) => {
  console.log('1111111111111');
  res.clearCookie('token');
  res.redirect('/login');
};
