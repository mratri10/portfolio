import React from 'react';
import experienceData from '../json/experience.json';
import { SectionContainer } from '../components/UI/SectionContainer';
import { Card } from '../components/UI/Card';
import { FaBriefcase, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';

export const Experience: React.FC = () => {
    // Sort experience by start date (descending) - assuming the data format allows simple string comparison or we trust the order.
    // The JSON seems to have various date formats, but since we are just displaying, we trust the JSON order which seems to be chronological.
    // Let's reverse it to show latest first if not already. But data is 'start from oldest'. So reverse it.
    const reversedExperience = [...experienceData].reverse();

    return (
        <SectionContainer id="experience" className="bg-dark-bg/50">
            <div className="text-center space-y-4 mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Work <span className="text-primary-500">Experience</span></h2>
                <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                <p className="text-slate-400">My professional journey</p>
            </div>

            <div className="relative border-l-2 border-slate-700 ml-3 md:ml-6 space-y-12 pb-12">
                {reversedExperience.map((exp, idx) => (
                    <div key={exp.id} className="relative pl-8 md:pl-12">
                        {/* Timeline Dot */}
                        <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-dark-bg"></div>

                        <Card className="hover:border-primary-500/30 transition-colors">
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl md:text-2xl font-bold text-white">{exp.company}</h3>
                                    {exp.outsource && exp.outsource.length > 0 && (
                                        <p className="text-sm text-slate-400 mt-1">
                                            Project: <span className="text-primary-400">{exp.outsource.join(", ")}</span>
                                        </p>
                                    )}
                                </div>
                                <div className="flex flex-col md:items-end gap-1 text-sm text-slate-400">
                                    <div className="flex items-center gap-2">
                                        <FaCalendarAlt className="text-primary-500" />
                                        <span>{exp.startDate} - {exp.endDate}</span>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <FaMapMarkerAlt className="text-primary-500" />
                                        <span>{exp.address.split(',').slice(-2).join(', ')}</span>
                                        {/* Simplified address for cleaner look */}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-start gap-2">
                                    <FaBriefcase className="text-primary-500 mt-1 flex-shrink-0" />
                                    <ul className="list-disc list-inside text-slate-300 space-y-1 text-sm md:text-base">
                                        {exp.jobDescription.map((desc, i) => (
                                            <li key={i}>{desc}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </SectionContainer>
    );
};
