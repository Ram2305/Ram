import React from 'react';
import phoenixGlobalLogo from '../assets/PG.png'; // Import the logo image

const Experience = () => {
  const experiences = [
    {
      company: "Phoenix Global",
      role: "Devops Engineer intern",
      duration: "Jun 2021 - Aug 2021",
      details: [
        "Deployed a scalable Micro-Service based application on AWS EC2 and achieved site engagement up to 77%",
        "Git is used for storing the source code, configured and integrated Jenkins(CI/CD) with git using web-hooks",
        "Build tool Maven is leveraged for packaging the source code, custom docker files are written to build docker image for the micro-service application",
        "The application runs on docker containers, load-balanced the incoming requests and maintained the desired count of replicas 99% of the time using docker swarm service",
      ],
      companyLogo: phoenixGlobalLogo, // Add the company logo here
    },
    // Add more experiences as needed
  ];

  return (
    <div name='Experience' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
            Experience
          </p>
        </div>
        <div className='space-y-4'>
          {experiences.map((experience, index) => (
            <div key={index}>
              <div className='flex items-center'>
                <img src={experience.companyLogo} alt={`${experience.company} Logo`} className='w-10 h-10 mr-4' />
                <h4 className='text-2xl italic'>{experience.company}</h4>
              </div>
              <h3 className='text-3xl font-bold'>{experience.role}</h3>
              <p className='text-gray-400'>{experience.duration}</p>
              <ul className='list-disc list-inside'>
                {experience.details.map((detail, idx) => (
                  <li key={idx} className='mt-3'>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
