import { NextFunction, Request, Response } from 'express';
import {
  body,
  Result,
  ValidationError,
  validationResult,
} from 'express-validator';

import prisma from '../configs/db.config.js';

const signupValidationRules = [
  body('email', 'Please enter a valid email adress')
    .trim()
    .isEmail()
    .normalizeEmail()
    .custom(async (value) => {
      const user = await prisma.user.findFirst({
        where: {
          email: value,
        },
      });
      if (user) {
        return Promise.reject('E-mail already in use');
      }
    }),
  body('password', 'Password must be at least 8 character long').isLength({
    min: 8,
    max: 32,
  }),
  body('firstName', 'First must contain only letters').isAlpha('pl-PL'),
  body('lastName', 'Last name must contain only letters').isAlpha('pl-PL'),
  body('age', 'Age input must contain only numbers').isNumeric(),
  body('city', 'Invalid city').isAlpha('pl-PL'),
  body('country', 'Invalid country').isAlpha('pl-PL'),
];

function validate(req: Request, res: Response, next: NextFunction) {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    next();
    return;
  }

  const extractedErrors: Array<string> = [];
  errors.array().forEach((error) => extractedErrors.push(error.msg));
  res.status(422).json(extractedErrors);
}

export { signupValidationRules, validate };
