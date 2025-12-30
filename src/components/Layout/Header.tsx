import React, { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Button } from '../UI/Button';

export const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Skills', href: '#skills' },
        // { name: 'Projects', href: '#projects' }, // Add later if projects exist
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 w-full transition-all duration-300 ${scrolled ? 'glass-nav py-4' : 'bg-transparent py-6'} z-50`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
                <a href="#" className="text-2xl font-heading font-bold text-white tracking-tight">
                    Atri<span className="text-primary-500">.</span>
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-slate-300 hover:text-primary-400 transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <Button variant="primary" onClick={() => window.location.href = '#contact'} className="px-6 py-2 text-sm">
                        Hire Me
                    </Button>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white text-2xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenu />}
                </button>

                {/* Mobile Nav */}
                {isOpen && (
                    <div className="absolute top-full left-0 w-full bg-dark-bg/95 backdrop-blur-xl border-t border-white/10 p-6 flex flex-col gap-4 md:hidden animation-slide-up shadow-2xl">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-lg font-medium text-slate-300 hover:text-primary-400 py-2 border-b border-white/5"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <Button variant="primary" onClick={() => { window.location.href = '#contact'; setIsOpen(false); }} className="w-full mt-4">
                            Hire Me
                        </Button>
                    </div>
                )}
            </div>
        </header>
    );
};
