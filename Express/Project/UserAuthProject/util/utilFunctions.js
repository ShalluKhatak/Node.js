import path from 'path';
import { fileURLToPath } from 'url';

export const filePath = (loc, fileName) => {
  try {
    if (loc === 'view') {
      const __filename = fileURLToPath(import.meta.url);
      const __dirname = path.dirname(__filename);
      let file = path.join(__dirname, 'src', '..', '..', loc, fileName);

      return file;
    }
  } catch (error) {
    console.log(error);
  }
};
