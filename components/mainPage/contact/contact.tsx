import React, { useState } from 'react';
import Image from 'next/image';

const ContactForm = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const res = await fetch('/api/sendEmail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setStatus('Email sent successfully');
            } else {
                setStatus('Failed to send email');
            }
        } catch (error) {
            console.error('Error sending email:', error);
            setStatus('Failed to send email');
        }
    };


    return (
        <article className="contact active" data-page="contact">
            <header>
                <h2 className="h2 article-title">Contact</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <div className='flex-contact'>
                    <div className='contact-item-duo'>
                        <input type="text" id="name" name="name" placeholder="Your name or twitch" className="form-input" value={formData.name} onChange={handleChange} required/>
                    </div>
                    <div className='contact-item-duo'>
                        <input type="email" id="email" name="email" placeholder="Your Email" className="form-input" value={formData.email} onChange={handleChange} required/>
                    </div>
                </div>
                <div className='contact-item'>
                    <input type="text" id="subject" name="subject" className="form-input" placeholder="Subject" value={formData.subject} onChange={handleChange} required/>
                </div>
                <div className='contact-item-text'>
                    <textarea id="message" name="message" className="form-input" placeholder="Your Message" value={formData.message} onChange={handleChange} required></textarea>
                </div>
                <button className="form-btn" type="submit">
                    <div className='flex'>
                        <Image draggable="false" className='send-icon' src="/assets/svg/paper-plane.svg" alt="Book icon" width={20} height={20}/>
                        <span> Send Message</span>
                    </div>
                </button>
                <p>{status}</p>
            </form>
        </article>
    );
};

export default ContactForm;
