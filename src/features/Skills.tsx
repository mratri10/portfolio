import React, { useState } from 'react';
import skillData from '../json/myskill.json';
import { SectionContainer } from '../components/UI/SectionContainer';
import { Card } from '../components/UI/Card';
import { FaCode, FaCheckCircle } from 'react-icons/fa';

export const Skills: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);
    const skills = skillData.skills; // Access the array from the object

    return (
        <SectionContainer id="skills">
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white">My <span className="text-primary-500">Skills</span></h2>
                <div className="w-20 h-1 bg-primary-500 mx-auto rounded-full"></div>
                <p className="text-slate-400">Technical proficiency and expertise</p>
            </div>

            <div className="flex flex-col lg:flex-row gap-8">
                {/* Tabs / Sidebar */}
                <div className="lg:w-1/3 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
                    {skills.map((skill, idx) => (
                        <button
                            key={idx}
                            onClick={() => setActiveTab(idx)}
                            className={`
                                flex items-center gap-3 px-6 py-4 rounded-xl text-left transition-all whitespace-nowrap lg:whitespace-normal
                                ${activeTab === idx
                                    ? 'bg-primary-600 text-white shadow-lg shadow-primary-500/25'
                                    : 'bg-dark-card/40 text-slate-400 hover:bg-dark-card hover:text-white'}
                            `}
                        >
                            <FaCode className={activeTab === idx ? "text-white" : "text-primary-500"} />
                            <div>
                                <h4 className="font-bold">{skill.name}</h4>
                                <span className="text-xs opacity-70">{skill.type}</span>
                            </div>
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="lg:w-2/3">
                    <Card className="min-h-[400px]">
                        <div className="space-y-6 animate-fade-in" key={activeTab}>
                            <div className="flex justify-between items-start">
                                <div>
                                    <h3 className="text-2xl font-bold text-white">{skills[activeTab].name}</h3>
                                    <p className="text-primary-400">{skills[activeTab].status} • Since {skills[activeTab].since}</p>
                                </div>
                                <div className="text-right hidden md:block">
                                    <span className="text-xs text-slate-500 uppercase tracking-wider">Used at</span>
                                    <div className="flex flex-wrap gap-2 justify-end mt-1">
                                        {skills[activeTab].company && skills[activeTab].company?.map(c => (
                                            <span key={c.id} className="text-xs bg-white/5 px-2 py-1 rounded text-slate-300">{c.name}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {skills[activeTab].details && skills[activeTab].details.length > 0 ? (
                                    skills[activeTab].details.map((detail, i) => (
                                        <div key={i} className="bg-dark-bg/50 p-4 rounded-lg">
                                            <h4 className="font-bold text-white mb-2 flex items-center gap-2">
                                                <FaCheckCircle className="text-primary-500 text-sm" />
                                                {detail.title}
                                            </h4>
                                            <ul className="text-sm text-slate-400 space-y-1 list-disc list-inside">
                                                {detail.description.map((desc, j) => (
                                                    <li key={j}>{desc}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-span-2 text-center py-12 text-slate-500">
                                        Comparison details not available for this skill, but I have used it extensively in projects.
                                    </div>
                                )}
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </SectionContainer>
    );
};
