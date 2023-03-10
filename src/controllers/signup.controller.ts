import { Request, Response } from 'express';

import prisma from '../configs/db.config.js';

import bcrypt from 'bcrypt';

function renderPage(req: Request, res: Response) {
  res.render('signup');
}

interface SignupRequestBody {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  age: number;
  city: string;
  country: string;
}

async function signup(req: Request, res: Response) {
  const {
    email,
    password,
    firstName,
    lastName,
    age,
    city,
    country,
  }: SignupRequestBody = req.body;

  const user = await prisma.user.create({
    data: {
      email,
      password,
      firstName,
      lastName,
      profile: {
        create: {
          age: Number(age),
          city,
          country,
          bio: '',
        },
      },
    },
  });

  res.status(201).json('User created');
}

export default {
  renderPage,
  signup,
};
