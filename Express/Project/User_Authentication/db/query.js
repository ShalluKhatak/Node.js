export const GET_USER = 'select * from test.user;';
export const CHECK_USER_WITH_EMAIL = 'select * from test.user where email=?;';
export const ADD_NEW_USER =
  'INSERT INTO test.user(name,email,password)VALUES(?,?,?);';

//   export const USER_LOGIN = 'select * from test.user where email=?;';
