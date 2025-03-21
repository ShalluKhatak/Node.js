import { CHECK_USER_WITH_EMAIL } from '../db/query.js';
import DB_Connection from '../util/DB_Connection.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { filePath } from '../util/utilFunctions.js';

export const loginController = (req, res) => {
  const loginFilePath = filePath('view', 'login.html');
  res.sendFile(loginFilePath);
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

  const {
    password: user_password = ' ',
    email: user_email = ' ',
    name: user_name = ' ',
  } = db_cont[0];

  const match = await bcrypt.compare(password, user_pass);
  if (match) {
    const token = jwt.sign(
      {
        email: user_email,
        name: user_name,
      },
      process.env.SECRET_KEY,
      {
        expiresIn: '1h',
      },
    );
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
