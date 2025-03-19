import { ADD_NEW_USER, CHECK_USER_WITH_EMAIL } from '../db/query.js';
import DB_Connection from '../Utils/DB_Connection.js';
import bcrypt from 'bcrypt';

const salt_rounds = bcrypt.genSaltSync(10);

export const signupController = async (req, res) => {
  console.log('req.body :>> ', req.body);
  const { name, email, password } = req.body;
  if (
    !(Boolean(name.trim()) && Boolean(email.trim()) && Boolean(password.trim()))
  ) {
    return res.status(400).send('Something went wrong');
  }
  const [db_cont] = await DB_Connection.query(CHECK_USER_WITH_EMAIL, [email]);
  if (db_cont.length > 0) {
    return res.status(400).send('Email already exists.');
  }
  const hashedPassword = await bcrypt.hash(password, salt_rounds);
  console.log('db_cont  :>> ', db_cont);
  const [new_user] = await DB_Connection.query(ADD_NEW_USER, [
    name,
    email,
    hashedPassword,
  ]);
  console.log('new_user :>> ', new_user?.affectedRows);
  if (new_user?.affectedRows > 0) {
    res.status(200).send('signup');
  } else {
    return res.status(400).send('User cannot registered.');
  }
};
