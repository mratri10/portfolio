import React, { useState } from "react";
import dataMySkill from '../json/myskill.json'
import durationSkill from '../json/durationSkill.json'
import profileData from '../json/myprofile.json';

const SkillPage = () => {
    const [popup, setPopup] = useState(false);
    const [skill, setSkill] = useState<MySkillI>();
    const calculateDuration = (name: String) => {
        let countDuration = 0;
        const getDuration = durationSkill.duration
        for (let i = 0; i < getDuration.length; i++) {
            const skill = getDuration[i].skill.filter(v => v.name === name);
            for (let j = 0; j < skill.length; j++) {
                const duration = skill[j].month;
                countDuration = countDuration + duration;
            }
        }
        return countDuration;
    }
    const onPopup = (data?: MySkillI) => {
        if (data == null) {
            setPopup(false)
        } else if (data.experience > 0) {
            setPopup(true)
            setSkill(data)
        }
    }
    return (
        <div className='col-span-1 p-4 text-white'>
            <div>
                <h2 className="text-3xl font-bold mb-3">My Skills</h2>
                <div className="grid grid-cols-2 gap-2">
                    {dataMySkill.myskills.map((item, i) => {
                        return (
                            <button key={i} onClick={() => onPopup({
                                name: item.name,
                                skills: item.skills,
                                experience: calculateDuration(item.name),
                                status: item.status

                            })}
                                className={`items-center grid bg-gray-700 p-3 rounded-lg w-full 
                                ${item.company ? "grid-cols-2" : "grid-cols-1"
                                    }`
                                }>
                                <div className="text-left">
                                    <h3 className="text-xl font-semibold">{item.name}</h3>
                                    <h4>{item.status}</h4>
                                </div>
                                {item.company ?
                                    <div className="text-right">
                                        <h5 className='text-red-400'>experienced</h5>
                                        <h6>{calculateDuration(item.name)} month</h6>
                                    </div> : null}

                            </button>
                        )
                    })}
                </div>
            </div>
            <div className="hidden lg:block">
                <div className='pt-5'>
                    <h1 className='text-xl font-semibold'>Contact</h1>
                </div>
                <div className="grid grid-cols-2 gap-2">
                    {profileData.contact.map((value, key) => (
                        <div key={key} className='grid grid-cols-4 rounded-lg bg-gray-700 p-1 items-center text-white'>
                            <div>
                                {value.icon ?
                                    <div className='flex bg-white rounded-lg justify-center items-center w-8 h-8 m-1'>
                                        <div className='bg-cover w-5 h-5' style={{
                                            backgroundImage: `url(${require(`../assets/${value.image}`)})`,
                                        }} />
                                    </div> :
                                    <div className='bg-cover w-8 h-8 m-1' style={{
                                        backgroundImage: `url(${require(`../assets/${value.image}`)})`,
                                    }} />}
                            </div>
                            <h1 className='text-right mr-5 col-span-3'>{value.value}</h1>
                        </div>
                    ))}
                </div>
            </div>
            {popup ?
                <div className="fixed inset-0 items-center justify-center bg-black bg-opacity-50">
                    <div className="max-w-2xl m-auto my-10 px-4 lg:px-0 h-screen">
                        <div className="bg-white text-black rounded-lg shadow-lg relative p-4" style={{ height: "90%" }}>
                            <div className="grid grid-cols-2 border-b-4 border-black mb-2">
                                <div>
                                    <h1 className="text-3xl font-bold">{skill?.name}</h1>
                                    <h1 className="text-lg font-bold">{skill?.status}</h1>
                                </div>
                                {skill?.experience != null && skill.experience > 0 ?
                                    <div className="text-right">
                                        <h5 className='text-red-400 font-semibold text-lg'>experienced</h5>
                                        <h1 className="text-lg font-semibold">{skill?.experience} Month</h1>
                                    </div> : <div />}
                            </div>
                            <div className="overflow-y-auto" style={{ height: "85%" }}>
                                {skill?.skills.map((item, i) => (
                                    <div key={i}>
                                        <h1 className="font-bold">{item.title}</h1>
                                        {item.description.map((v, j) => (
                                            <div key={j} className="flex">
                                                <h1>{j + 1}.</h1>
                                                <h1 className="ml-3">{v}</h1>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <button className=" flex justify-self-center bg-gray-800 text-white px-4 py-2 rounded-lg mt-3" onClick={() => onPopup()}><h1>Close</h1></button>
                        </div>

                    </div>
                </div> : null}
        </div>
    )
}

interface MySkillI {
    name: string,
    status: string,
    experience: number,
    skills: SkillItem[]
}
interface SkillItem {
    title: string,
    description: string[]
}
export default SkillPage