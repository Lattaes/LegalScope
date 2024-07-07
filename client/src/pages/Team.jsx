import React from 'react';
import { FaInstagram, FaLinkedin } from 'react-icons/fa';
import Member from '../assets/kjw.jpg';
import Member2 from '../assets/kjw.jpg';
import Member3 from '../assets/kjw.jpg';
import Member4 from '../assets/kjw.jpg';

const Team = () => {
  const teamMembers = [
    {
      name: 'Ghalih Lanjar Pangastuti',
      position: 'Executive Officer',
      image: Member,
      instagram: 'https://www.instagram.com/lattae30/',
      linkedin: 'https://www.linkedin.com/in/sunny_khan'
    },
    {
      name: 'Ghania Shafiqa Raisa',
      position: 'UX/UI Designer',
      image: Member2,
      instagram: 'https://www.instagram.com/ghania.sr/',
      linkedin: 'https://www.linkedin.com/in/alina_jesia'
    },
    {
      name: 'Kevin Khalfani Fadillah',
      position: 'Business Development',
      image: Member3,
      instagram: 'https://www.instagram.com/kevink.f/',
      linkedin: 'https://www.linkedin.com/in/alex_sohag'
    },
    {
      name: 'Sayyid Nabil Rifki',
      position: 'Head of Marketing',
      image: Member4,
      instagram: 'https://www.instagram.com/snabillr/',
      linkedin: 'https://www.linkedin.com/in/afroza_mou'
    }
  ];

  return (
    <section className="team bg-customNavy text-white text-center py-40">
      <h1 className="text-4xl font-bold leading-[55px] lg:text-[42px] mb-8">Meet Our Team</h1>
      <p className="text-white my-8 w-2/3 lg:w-1/3 mx-auto">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis accumsan nisi Ut ut felis congue nisl hendrerit commodo.
      </p>
      <div className="cards flex justify-center gap-10 flex-wrap">
        {teamMembers.map((member, index) => (
          <div key={index} className="card w-[270px] py-8 px-14 text-white text-center hover:scale-105 duration-300" style={{
            background: 'linear-gradient(268.12deg, rgba(254, 254, 255, 0.032) -11.04%, rgba(255, 255, 255, 0.018) 104.89%)',
            boxShadow: '0px 22px 18px rgba(0, 0, 0, 0.05)',
            borderRadius: '34px'
          }}>
            <img className="mx-auto -mb-[20px] rounded-xl" src={member.image} alt={member.name} />
            <h2 className="text-[28px] font-medium leading-9 mb-[7px]">{member.name}</h2>
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
