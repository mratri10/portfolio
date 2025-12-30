import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import profileData from '../../json/myprofile.json';

export const Footer: React.FC = () => {
    const currentYear = new Date().getFullYear();

    // Helper to get link from contact data
    const getLink = (name: string) => {
        return profileData.contact.find(c => c.name.toLowerCase() === name.toLowerCase())?.link || '#';
    };

    const socialLinks = [
        { icon: <FaGithub />, href: getLink('github') },
        { icon: <FaLinkedin />, href: getLink('linkedin') },
        { icon: <FaWhatsapp />, href: `https://wa.me/${profileData.contact.find(c => c.name === 'Whatsapp')?.value}` },
        { icon: <HiMail />, href: `mailto:${profileData.contact.find(c => c.name === 'Email')?.value}` }, // Ensure JSON is capitalized or matched correctly
    ];

    return (
        <footer className="py-8 border-t border-white/5 bg-dark-bg text-center">
            <div className="flex justify-center gap-6 mb-4">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl text-slate-400 hover:text-primary-400 hover:scale-110 transition-all"
                    >
                        {social.icon}
                    </a>
                ))}
            </div>
            <p className="text-slate-500 text-sm">
                © {currentYear} Atri Ariska Alfa. All rights reserved.
            </p>
        </footer>
    );
};
