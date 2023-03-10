import express, { Application } from 'express';
import helmet from 'helmet';
import path from 'path';

import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import loginRouter from './routes/login.js';
import signupRouter from './routes/signup.js';

const app: Application = express();

app.use(helmet());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use('/login', loginRouter);
app.use('/signup', signupRouter);

export default app;
