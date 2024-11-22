import React, { useEffect } from 'react';
import './App.css';
import dataMySkill from './myskill.json'
import durationSkill from './durationSkill.json'
import profileData from './myprofile.json';
import mygambar from './assets/atri.png';

function App() {

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
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  grid-rows-3">
      {/* My Skill Page     */}
      <div className='bg-gray-800 col-span-1 p-4 flex'>
        <div className="text-white ">
          <h2 className="text-3xl font-bold">My Skills</h2>
          {dataMySkill.myskills.map(item => (
            <button className={`items-center flex grid gap-3 mt-3 bg-gray-700 p-3 rounded-lg w-full 
              ${item.company ? "grid-cols-3" : "grid-cols-2"
              }`
            }>
              <h3 className="text-xl font-semibold text-left">{item.name}</h3>
              {item.company ?
                <div>
                  <h5 className='text-red-400 mr-2'>experienced</h5>
                  <h6>{calculateDuration(item.name)} month</h6>
                </div> : null}
              <div className='grow text-right text-white'>
                <h4>{item.status}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* My Profile Page     */}
      <div className='bg-gray-800 col-span-1 p-4 text-white'>
        <div className=' border-b-4 border-white pb-2'>
          <div className='justify-items-center'>
            <div className='bg-cover w-40 h-40 rounded-full border-2 border-gray-300 bg-red-300' style={{ backgroundImage: `url(${mygambar})` }}>
            </div>
          </div>
          <h1 className='text-3xl font-bold text-center'>
            {profileData.name}
          </h1>
          <h1 className='text-center'>{profileData.gender} umur {countAge(profileData.birthday)} tahun</h1>
          <h1 className='text-center font-semibold'>{profileData.motto}</h1>
        </div>
        <div className='pt-5'>
          <h1 className='text-xl font-semibold'>Contact</h1>
        </div>
        <div>
          {profileData.contact.map((value, key) => (
            <div key={key} className='grid grid-flow-row-dense grid-cols-4 rounded-lg bg-gray-700 p-1 flex items-center mt-3 text-white'>
              <div>
                {value.icon ?
                  <div className='flex bg-white rounded-lg justify-center items-center w-8 h-8 m-1'>
                    <div className='bg-cover w-5 h-5' style={{
                      backgroundImage: `url(${require(`${value.image}`)})`,
                    }} />
                  </div> :
                  <div className='bg-cover w-8 h-8 m-1' style={{
                    backgroundImage: `url(${require(`${value.image}`)})`,
                  }} />}
              </div>
              <h1 className='text-right mr-5 col-span-3'>{value.value}</h1>
            </div>
          ))}
        </div>
        <div className='pt-5'>
          <h1 className='text-xl font-semibold'>Education</h1>
        </div>
        {profileData.education.map(item => (
          <div className={`items-center mt-2 bg-gray-700 p-2 rounded-lg w-full text-white`
          }>
            <h3 className="text-xl font-semibold text-left">{item.name}</h3>
            <div>
              <h6>{item.masuk} - {item.lulus}</h6>
            </div>
            <div className='grow text-left text-white'>
              <h4>{item.jurusan}</h4>
            </div>
          </div>
        ))}
        <div className='pt-5'>
          <h1 className='text-xl font-semibold'>Address</h1>
        </div>
        {profileData.alamat.map(item => (
          <div className={`items-center mt-2 bg-gray-700 p-2 rounded-lg w-full text-white`
          }>
            <h3 className="text-xl font-semibold text-left">{item.type}</h3>
            <div>
              <h1>{item.provinsi} - {item.kota} - {item.kecamatan} - {item.kelurahan}</h1>
              <h1>{item.jalan}</h1>
            </div>
          </div>
        ))}
      </div>
      {/* My Expirance Page     */}
      <div className='bg-gray-800 col-span-1 p-4 flex '>
        <div className="text-white ">
          <h2 className="text-3xl font-bold">My Expirance</h2>
          {dataMySkill.myskills.map(item => (
            <button className={`items-center flex grid gap-3 mt-3 bg-gray-700 p-3 rounded-lg w-full 
              ${item.company ? "grid-cols-3" : "grid-cols-2"
              }`
            }>
              <h3 className="text-xl font-semibold text-left">{item.name}</h3>
              {item.company ?
                <div>
                  <h5 className='text-red-400 mr-2'>experienced</h5>
                  <h6>{calculateDuration(item.name)} month</h6>
                </div> : null}
              <div className='grow text-right text-white'>
                <h4>{item.status}</h4>
              </div>
            </button>
          ))}
        </div>
      </div>
      {/* <div className='w-full bg-red-800 h-full'></div>
      <div className='w-full bg-red-800 h-full'></div> */}
    </div>
  );
}

export default App;