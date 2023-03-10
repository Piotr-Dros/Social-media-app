import { MailOptions } from 'nodemailer/lib/json-transport/index.js';
import { mailTransporter } from '../configs/general.config.js';
import { v4 as uuidv4 } from 'uuid';

export function sendVerificationEmail(id: number, email: string) {
  const mailOptions: MailOptions = {
    from: 'test@test.com',
    to: email,
    subject: 'Verification mail',
    html: `Sending a verification email`,
  };

  mailTransporter.sendMail(mailOptions);

  const verificationToken: string = uuidv4() + String(id);
  const veryfyingUrl: string = `http://localhost:8000/signup/verify/${id}/${verificationToken}`;
}
