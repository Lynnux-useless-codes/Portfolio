import React from 'react';

interface EmailTemplateProps {
    firstName: string;
    email: string;
    message: string;
    subject: string;
}

export const EmailTemplate: React.FC<EmailTemplateProps> = ({ firstName, email, message, subject }) => {
    return (
        <div>
            <h1>Hello i'm {firstName},</h1>
            <p><strong>Subject:</strong> {subject}</p>
            <p>{message}</p>
            <p>You can contact me at {email}</p>
        </div>
    );
};
