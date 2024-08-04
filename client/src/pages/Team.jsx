import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Member from '../assets/jar.jpg';
import Member2 from '../assets/fiq.jpg';
import Member3 from '../assets/kev.jpg';
import Member4 from '../assets/bil.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Galih Lanjar Pangastuti',
      position: 'Developer',
      image: Member,
      instagram: 'https://www.instagram.com/lattae.s/',
      linkedin: 'https://www.linkedin.com/in/galih-lanjar-pangastuti-502351201/'
    },
    {
      name: 'Ghania Shafiqa Raisa',
      position: 'Developer',
      image: Member2,
      instagram: 'https://www.instagram.com/ghania.sr/',
      linkedin: 'https://www.linkedin.com/in/ghania-shafiqa-raisa-68654b24b/'
    },
    {
      name: 'Kevin Khalfani Fadillah',
      position: 'Developer',
      image: Member3,
      instagram: 'https://www.instagram.com/kevink.f/',
      linkedin: 'https://www.linkedin.com/in/kevin-khalfani-f/'
    },
    {
      name: 'Sayyid Nabil Rifki',
      position: 'Developer',
      image: Member4,
      instagram: 'https://www.instagram.com/snabillr/',
      linkedin: 'https://www.linkedin.com/'
    }
  ];

  return (
    <section className="team bg-customNavy text-white text-center py-40">
      <h1 className="text-4xl font-bold leading-[55px] lg:text-[42px] mb-8">Temui Tim Kami</h1>
      <p className="text-white my-8 w-2/3 lg:w-1/3 mx-auto">
        Kami adalah tim profesional yang berdedikasi untuk memberikan solusi terbaik dalam industri.
      </p>
      <div className="cards flex justify-center gap-10 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="card w-[270px] py-8 px-14 text-white text-center hover:scale-105 duration-300" style={{
            background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
            boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
            borderRadius: '34px'
          }}>
            <img className="mx-auto mb-[8px] rounded-xl" src={member.image} alt={member.name} />
            <h4 className="text-[24px] font-medium leading-9 mb-[7px]">{member.name}</h4>
            <p className="font-normal leading-5 uppercase">{member.position}</p>
            <div className="icons flex mt-[10px] justify-center gap-2">
              <a href={member.instagram} target="_blank" rel="noopener noreferrer">
                <FaInstagram className="icon cursor-pointer text-[#bc2a8d] hover:text-white" />
              </a>
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="icon cursor-pointer text-[#0e76a8] hover:text-white" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Team;