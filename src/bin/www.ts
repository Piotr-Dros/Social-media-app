import { createServer } from 'http';
import app from '../app.js';
import { PORT } from '../configs/general.config.js';
import { mailTransporter } from '../configs/general.config.js';

(async () => {
  mailTransporter.verify((error, success) => {
    if (error) {
      console.log(error, 'Nodemailer not verified');
    } else {
      console.log('Nodemailer connected');
    }
  });
  createServer(app).listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
})();
