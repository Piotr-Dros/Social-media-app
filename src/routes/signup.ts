import express, { Router } from 'express';
import controls from '../controllers/signup.controller.js';
import {
  signupValidationRules,
  validate,
} from '../middleware/signupValidations.js';

const router: Router = express.Router();

router.get('/', controls.renderPage);
router.post('/', signupValidationRules, validate, controls.signup);

export default router;
