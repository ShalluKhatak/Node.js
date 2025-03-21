export const GET_USER = 'select * from user_auth.user;';
export const CHECK_USER_WITH_EMAIL =
  'select * from user_auth.user where email=?;';
export const ADD_NEW_USER =
  'INSERT INTO user_auth.user(name,email,password)VALUES(?,?,?);';

//   export const USER_LOGIN = 'select * from user_auth.user where email=?;';
