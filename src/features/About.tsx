import React from 'react';
import profileData from '../json/myprofile.json';
import { SectionContainer } from '../components/UI/SectionContainer';
import { Card } from '../components/UI/Card';
import { FaGraduationCap, FaMapMarkerAlt, FaUser } from 'react-icons/fa';

export const About: React.FC = () => {
    const countAge = (birthday: string): number => {
        const [day, month, year] = birthday.split("-").map(Number);
        const birthDate = new Date(year, month - 1, day);
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const hasBirthdayPassedThisYear =
            today.getMonth() > birthDate.getMonth() ||
            (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
        if (!hasBirthdayPassedThisYear) {
            age--;
        }
        return age;
    };

    return (
        <SectionContainer id="about">
            <div className="space-y-12">
                {/* Section Header */}
                <div className="text-center space-y-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-white">About <span className="text-primary-500">Me</span></h2>
                    <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Passionate developer with {countAge(profileData.birthday)} years of life experience and a dedication to continuous learning.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Education */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <FaGraduationCap className="text-primary-500" /> Education
                        </h3>
                        <div className="space-y-4">
                            {profileData.education.slice().reverse().map((edu, idx) => (
                                <Card key={idx} className="border-l-4 border-l-primary-500">
                                    <h4 className="text-xl font-bold text-white">{edu.name}</h4>
                                    <div className="flex justify-between text-sm text-primary-400 mt-1">
                                        <span>{edu.major || "General Education"}</span>
                                        <span>{edu.startDate} - {edu.endDate}</span>
                                    </div>
                                    <p className="text-slate-400 text-sm mt-2">{edu.city}</p>
                                </Card>
                            ))}
                        </div>
                    </div>

                    {/* Personal Info & Address */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <FaUser className="text-primary-500" /> Personal Info
                        </h3>
                        <Card>
                            <ul className="space-y-4 text-slate-300">
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="font-semibold text-slate-400">Gender</span>
                                    <span>{profileData.gender}</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="font-semibold text-slate-400">Age</span>
                                    <span>{countAge(profileData.birthday)} Years Old</span>
                                </li>
                                <li className="flex justify-between border-b border-white/5 pb-2">
                                    <span className="font-semibold text-slate-400">Birthplace</span>
                                    <span>{profileData.birthplace}</span>
                                </li>
                            </ul>
                        </Card>

                        <h3 className="text-2xl font-bold text-white flex items-center gap-3 mt-8">
                            <FaMapMarkerAlt className="text-primary-500" /> Locations
                        </h3>
                        <div className="grid gap-4">
                            {profileData.addresses.map((addr, idx) => (
                                <Card key={idx} className="bg-dark-card/40">
                                    <h4 className="text-lg font-bold text-white mb-2">{addr.label}</h4>
                                    <p className="text-slate-400 text-sm">{addr.street}</p>
                                    <p className="text-slate-500 text-xs mt-1">
                                        {addr.subDistrict}, {addr.district}, {addr.city}, {addr.province}
                                    </p>
                                </Card>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};
