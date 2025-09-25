import nodeMailer from 'nodemailer';
import { SMTP_ADDRESS, SMTP_HOST, SMTP_PASSWORD, SMTP_PORT } from './constants';
import logger from './logger.config';

export const transporter = nodeMailer.createTransport({
  host: SMTP_HOST,
  port: SMTP_PORT,
  secure: true,
  auth: {
    user: SMTP_ADDRESS,
    pass: SMTP_PASSWORD,
  },
});

export async function sendMail(
  recipientEmail: string,
  mailHtmlBody: string,
  mailSubject: string,
  appName: string,
) {
  logger.info({
    message: 'Sending mail',
    to: recipientEmail,
    subject: mailSubject,
    app: appName,
  });

  await transporter.sendMail({
    from: `${appName} <${SMTP_ADDRESS}>`,
    to: recipientEmail,
    subject: mailSubject,
    html: mailHtmlBody,
  });
}
