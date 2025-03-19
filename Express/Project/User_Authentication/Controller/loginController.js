import { CHECK_USER_WITH_EMAIL } from '../db/query.js';
import DB_Connection from '../Utils/DB_Connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

export const loginController = (req, res) => {
  res.send('Login');
};

export const loginControllerPost = async (req, res) => {
  const { email, password } = req?.body;
  if (!(Boolean(email.trim()) && Boolean(password.trim()))) {
    return res.status(400).send('Something went wrong');
  }
  const [db_cont] = await DB_Connection.query(CHECK_USER_WITH_EMAIL, [email]);
  if (db_cont.length === 0) {
    return res.status(400).send('user does not exists with this mail.');
  }
  const user_pass = db_cont[0]?.password;
  const user_email = db_cont[0]?.email;
  const user_name = db_cont[0]?.name;
  const match = await bcrypt.compare(password, user_pass);
  if (match) {
    //payload+secret_key+algo (rsa etc.)+expiry
    const token = jwt.sign(
      { email: user_email, name: user_name },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );
    console.log('token :>> ', token);
    res.cookie('token', token, {
      httpOnly: true,
      secure: true,
      sameSite: 'Strict',
    });
    res.send('Login');
  } else {
    return res.status(400).send('Something went wrong');
  }
};
