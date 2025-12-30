import React from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

interface LayoutProps {
    children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="min-h-screen flex flex-col relative overflow-hidden">
            {/* Background Gradients */}
            <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary-600/20 rounded-full blur-[120px] animate-blob"></div>
                <div className="absolute top-[50%] right-[-10%] w-[400px] h-[400px] bg-purple-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-[-10%] left-[20%] w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-4000"></div>
            </div>

            <Header />
            <main className="flex-grow pt-20">
                {children}
            </main>
            <Footer />
        </div>
    );
};
