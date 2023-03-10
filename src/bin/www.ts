import { createServer } from 'http';
import prisma from '../configs/db.config.js';
import app from '../app.js';
import { PORT } from '../configs/general.config.js';

createServer(app).listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
