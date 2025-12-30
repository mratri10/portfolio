import React from 'react';
import profileData from '../json/myprofile.json';
import { SectionContainer } from '../components/UI/SectionContainer';
import { Card } from '../components/UI/Card';
import { Button } from '../components/UI/Button';
import { FaWhatsapp, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

export const Contact: React.FC = () => {
    const getContact = (name: string) => profileData.contact.find(c => c.name.toLowerCase() === name.toLowerCase());

    const contacts = [
        {
            icon: <FaEnvelope className="text-2xl" />,
            title: "Email",
            value: getContact('Email')?.value,
            link: `mailto:${getContact('Email')?.value}`,
            color: "text-blue-400"
        },
        {
            icon: <FaWhatsapp className="text-2xl" />,
            title: "WhatsApp",
            value: getContact('Whatsapp')?.value,
            link: `https://wa.me/${getContact('Whatsapp')?.value}`,
            color: "text-green-400"
        },
        {
            icon: <FaLinkedin className="text-2xl" />,
            title: "LinkedIn",
            value: getContact('LinkedIn')?.value,
            link: getContact('LinkedIn')?.link,
            color: "text-blue-600"
        },
        {
            icon: <FaGithub className="text-2xl" />,
            title: "GitHub",
            value: getContact('GitHub')?.value,
            link: getContact('GitHub')?.link,
            color: "text-slate-200"
        }
    ];

    return (
        <SectionContainer id="contact" className="mb-20">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Get In <span className="text-primary-500">Touch</span></h2>
                <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                <p className="text-slate-400">Feel free to reach out for collaborations or just a friendly hello</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {contacts.map((contact, idx) => (
                    <a
                        key={idx}
                        href={contact.link || '#'}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group"
                    >
                        <Card className="h-full flex flex-col items-center justify-center text-center gap-4 hover:border-primary-500/50">
                            <div className={`p-4 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors ${contact.color}`}>
                                {contact.icon}
                            </div>
                            <div>
                                <h4 className="font-bold text-white mb-1">{contact.title}</h4>
                                <p className="text-slate-400 text-sm group-hover:text-primary-400 transition-colors break-all">
                                    {contact.value}
                                </p>
                            </div>
                        </Card>
                    </a>
                ))}
            </div>

            <div className="mt-16 text-center">
                <Card className="max-w-3xl mx-auto bg-gradient-to-r from-primary-900/40 to-purple-900/40 border-none">
                    <h3 className="text-2xl font-bold text-white mb-4">Ready to start a project?</h3>
                    <p className="text-slate-300 mb-8">
                        I am currently open to new opportunities and collaborations.
                        Let's discuss how I can contribute to your team.
                    </p>
                    <Button onClick={() => window.open(`mailto:${getContact('Email')?.value}`, '_blank')}>
                        Send Message
                    </Button>
                </Card>
            </div>
        </SectionContainer>
    );
};
