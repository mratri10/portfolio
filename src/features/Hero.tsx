import React from 'react';
import profileData from '../json/myprofile.json';
import { Button } from '../components/UI/Button';
import { SectionContainer } from '../components/UI/SectionContainer';
import profileImage from '../assets/atri.png'; // Make sure this path is correct

export const Hero: React.FC = () => {
    return (
        <SectionContainer className="min-h-screen flex items-center justify-center pt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
                {/* Text Content */}
                <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
                    <div className="space-y-2">
                        <h2 className="text-xl md:text-2xl text-primary-400 font-medium animate-fade-in">
                            Hello, I'm
                        </h2>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white animate-fade-in">
                            {profileData.name}
                        </h1>
                        <h3 className="text-2xl md:text-3xl font-heading text-slate-300 animate-fade-in">
                            {profileData.role.map((v, i) => <span className="text-gradient font-bold">{v + (i < profileData.role.length - 1 ? " - " : "")}</span>)}

                        </h3>
                    </div>

                    <p className="text-slate-400 text-lg max-w-lg mx-auto md:mx-0 leading-relaxed animate-fade-in">
                        {profileData.motto}
                    </p>

                    <div className="flex flex-wrap gap-4 justify-center md:justify-start pt-4 animate-fade-in">
                        <Button onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}>
                            More About Me
                        </Button>
                        <Button variant="outline" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
                            Contact Me
                        </Button>
                    </div>
                </div>

                {/* Image Content */}
                <div className="order-1 md:order-2 flex justify-center relative animate-fade-in">
                    {/* Decorative circle behind image */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 rounded-full blur-3xl transform scale-90"></div>

                    <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-white/10 p-2 glass-card">
                        <div className="w-full h-full rounded-full overflow-hidden bg-slate-800 relative group">
                            <img
                                src={profileImage}
                                alt={profileData.name}
                                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
