import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';
import { EmailTemplate } from '../../components/email-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    try {
        const emailContent = EmailTemplate({ firstName: name, email: email, message: message, subject: subject });
        const emailOptions = {
            from: 'no-reply@lynnux.xyz',
            to: ['botdevlynn@gmail.com'],
            subject: subject,
            text: message,
            react: emailContent,
        };

        const { data, error } = await resend.emails.send(emailOptions);
        if (error) {
            return res.status(400).json(error);
        }
        res.status(200).json(data);
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error });
    }
};
