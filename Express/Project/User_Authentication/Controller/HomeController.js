import { GET_USER } from '../db/query.js';
import DB_Connection from '../Utils/DB_Connection.js';

export const HomeController = async (req, res) => {
  const [db_cont] = await DB_Connection.query(GET_USER);
  console.log('db_cont :>> ', db_cont);
  res.send('Home Screen!');
};
