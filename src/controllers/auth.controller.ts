import { Request, Response } from 'express';
import prisma from '../configs/db.config.js';
import bcrypt from 'bcrypt';

import { sendVerificationEmail } from '../services/email.js';
import { User } from '@prisma/client';

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
  const user = await createUserWithProfile(req.body);
  if (!user) {
    res.status(500).json('Failed to create an user');
    return;
  }

  sendVerificationEmail(user.id, user.email);

  res.status(201).json('User created');
}

async function createUserWithProfile(
  data: SignupRequestBody
): Promise<User> | null {
  try {
    const hashedPassword = await bcrypt.hash(data.password, 10);

    return await prisma.user.create({
      data: {
        email: data.email,
        password: hashedPassword,
        firstName: data.firstName,
        lastName: data.lastName,
        profile: {
          create: {
            age: Number(data.age),
            city: data.city,
            country: data.country,
            bio: '',
          },
        },
      },
    });
  } catch (error) {
    return null;
  }
}

export default {
  renderPage,
  signup,
};
