import React, { useState } from "react";
import dataMySkill from '../json/myskill.json'
import durationSkill from '../json/durationSkill.json'
import profileData from '../json/myprofile.json';
import { FaExternalLinkAlt } from "react-icons/fa";

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
    const redirectLink = (link: string) => {
        window.location.href = link
    }
    return (
        <div className='col-span-1 p-4 text-white'>
            <div>
                <h2 className="text-xl font-bold mb-3">My Skills</h2>
                <div className="grid lg:grid-cols-2 lg:gap-2 grid-cols-1 gap-1">
                    {dataMySkill.myskills.map((item, i) => {
                        return (
                            <button key={i} onClick={() => onPopup({
                                name: item.name,
                                skills: item.skills,
                                experience: calculateDuration(item.name),
                                status: item.status

                            })}>
                                <div className={`items-center grid bg-gray-700 p-3 rounded-t-lg w-full 
                                ${item.company ? "grid-cols-2" : "grid-cols-1"
                                    }`
                                }>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold">{item.name}</h3>
                                        <h4>{item.status}</h4>
                                    </div>
                                    {item.company ?
                                        <h6 className="text-right">{calculateDuration(item.name)} month</h6>
                                        : null}
                                </div>
                                {item.company ?
                                    <div className="text-right bg-blue-400 px-4 py-1 rounded-b-lg">
                                        <h5 className='text-white'>Experience Detail</h5>
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
                        <button disabled={value.link == null}
                            key={key} onClick={() => value.link ? redirectLink(value.link) : ""}
                            className='grid grid-cols-4 w-full rounded-lg bg-gray-700 p-1 items-center text-white mt-2'>
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
                            <div className="flex mr-5 col-span-3 items-center">
                                <h1 className='text-right' style={{ flex: 1, textAlign: 'right' }}>{value.value}</h1>
                                {value.link ? <FaExternalLinkAlt className="ml-2" /> : null}
                            </div>
                        </button>
                    ))}
                </div>
            </div>
            {popup ?
                <div className="fixed inset-0 items-center justify-center bg-black bg-opacity-50 hidden lg:block">
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
                                                <h1 key={j} className="ml-3">{v}</h1>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                            <button className=" flex justify-self-center bg-gray-800 text-white px-4 py-2 rounded-lg mt-3" onClick={() => onPopup()}><h1>Close</h1></button>
                        </div>

                    </div>
                </div> : null}
            {popup ?
                <div className="fixed inset-0 items-center justify-center bg-black bg-opacity-50 block lg:hidden">
                    <div className="max-w-2xl m-auto my-10 px-4 lg:px-0 h-screen">
                        <div className="bg-white text-black rounded-lg shadow-lg relative p-4" style={{ height: "90%" }}>
                            <div className="grid grid-cols-2 border-b-4 border-black mb-2">
                                <div>
                                    <h1 className="text-lg font-bold">{skill?.name}</h1>
                                    <h1>{skill?.status}</h1>
                                </div>
                                {skill?.experience != null && skill.experience > 0 ?
                                    <div className="text-right">
                                        <h5 className='text-red-400'>experienced</h5>
                                        <h1 className="text-lg font-semibold">{skill?.experience} Month</h1>
                                    </div> : <div />}
                            </div>
                            <div className="overflow-y-auto" style={{ height: "80%" }}>
                                {skill?.skills.map((item, i) => (
                                    <div key={i}>
                                        <h1 className="font-bold">{item.title}</h1>
                                        {item.description.map((v, j) => (
                                            <div key={j} className="flex">
                                                <h1>{j + 1}.</h1>
                                                <h1 key={j} className="ml-3">{v}</h1>
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