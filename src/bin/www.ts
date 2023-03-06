import { createServer } from 'http';
import app from '../app.js';
import { PORT } from '../configs/general.config.js';

(async () => {
  createServer(app).listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });
})();
