import React from "react"
import profileData from '../json/myprofile.json';
import mygambar from '../assets/atri.png';
import { BsGenderMale, BsGenderFemale } from 'react-icons/bs'
import { FaExternalLinkAlt } from "react-icons/fa";

const ProfilePage = () => {
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
    const onRole = (listOnrole?: string[]) => {
        if (listOnrole != null && listOnrole.length > 0) {
            let onsite = "";
            for (let i = 0; i < listOnrole.length; i++) {
                const element = listOnrole[i];
                onsite = onsite + element + " | ";
            }
            // Remove the last " | " using slice
            return onsite.slice(0, -3);
        } else {
            return "";
        }
    };
    const redirectLink = (link: string) => {
        window.location.href = link
    }
    return (
        <div className='col-span-1 p-4 text-white'>
            <div className=' border-b-4 border-white pb-2'>
                <div className='justify-items-center'>
                    <div className='bg-cover w-40 h-40 rounded-full border-2 border-gray-300 bg-red-300' style={{ backgroundImage: `url(${mygambar})` }}>
                    </div>
                </div>
                <h1 className='text-3xl font-bold text-center'>
                    {profileData.name}
                </h1>
                <h1 className="text-center text-lg font-bold">
                    {onRole(profileData.role)}
                </h1>
                <div className="flex justify-center">
                    {profileData.gender === "Pria" ? <BsGenderMale /> : <BsGenderFemale />}
                    <h1 className='text-center ml-2'>{countAge(profileData.birthday)} years old</h1>
                </div>
                <h1 className='text-center font-semibold'>{profileData.motto}</h1>
            </div>
            <div className="block lg:hidden">
                <div className='pt-5'>
                    <h1 className='text-xl font-semibold'>Contact</h1>
                </div>
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
            <div className='pt-5'>
                <h1 className='text-xl font-semibold'>Education</h1>
            </div>
            <div className="grid grid-cols-2 gap-2">
                {profileData.education.map((item, i) => (
                    <div key={i} className={`items-center bg-gray-700 p-2 rounded-lg w-full text-white`
                    }>
                        <h3 className="text-lg font-semibold text-left">{item.name}</h3>
                        <div>
                            <h6>{item.masuk} - {item.lulus}</h6>
                        </div>
                        <div className='grow text-left text-white'>
                            <h4>{item.jurusan}</h4>
                        </div>
                    </div>
                ))}
            </div>
            <div className='pt-5'>
                <h1 className='text-xl font-semibold'>Address</h1>
            </div>
            {profileData.alamat.map((item, i) => (
                <div key={i} className={`items-center mt-2 bg-gray-700 p-2 rounded-lg w-full text-white`
                }>
                    <h3 className="text-lg font-semibold text-left">{item.type}</h3>
                    <div>
                        <h1>{item.provinsi} - {item.kota} - {item.kecamatan} - {item.kelurahan}</h1>
                        <h1>{item.jalan}</h1>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ProfilePage