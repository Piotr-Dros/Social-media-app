import express, { Router } from 'express';
import controls from '../controllers/login.controller.js';

const router: Router = express.Router();

router.route('/').get(controls.renderPage);

export default router;
