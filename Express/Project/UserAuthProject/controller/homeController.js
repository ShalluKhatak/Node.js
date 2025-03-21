import { GET_USER } from '../db/query.js';
import DB_Connection from '../util/DB_Connection.js';
import { filePath } from '../util/utilFunctions.js';

export const homeController = (req, res) => {
  const homeFilePath = filePath('view', 'home.html');
  res.sendFile(homeFilePath);
};
