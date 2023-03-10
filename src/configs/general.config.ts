import dotenv from 'dotenv';
import nodemailer, { Transporter } from 'nodemailer';

dotenv.config();

export const PORT = process.env.PORT;
const MAIL_HOST = process.env.MAIL_HOST;
const MAIL_PORT = parseInt(process.env.MAIL_PORT);
const MAIL_EMAIL = process.env.MAIL_EMAIL;
const MAIL_PASS = process.env.MAIL_PASS;

export const mailTransporter: Transporter = nodemailer.createTransport({
  host: MAIL_HOST,
  port: MAIL_PORT,
  secure: true,
  auth: {
    user: MAIL_EMAIL,
    pass: MAIL_PASS,
  },
});
