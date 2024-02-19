import { diskStorage, Options } from 'multer';
import * as path from 'path';
import { v4 as uuidv4 } from 'uuid';
import fs from 'fs-extra';

const multerConfig: Options = {
  storage: diskStorage({
    destination: (req, file, callback) => {
      const path = `./upload/${req.headers.userid}`;
      fs.mkdirsSync(path);
      callback(null, path);
    },
    filename: (req, file, callback) => {
      const fileName = path.parse(file.originalname).name.replace(/\s/g, '') + '-' + uuidv4();
      const extension = path.parse(file.originalname).ext;
      callback(null, `${fileName}${extension}`);
    },
  }),
  limits: {
    fileSize: 10 * 1024 * 1024, // 10 MB
  },
};

export default multerConfig;
