import React from 'react';

import GCP from '../assets/gcp.png';
import JavaScript from '../assets/javascript.png';
import Node from '../assets/node.png';
import GitHubActions from '../assets/githubactions.png';
import Mongo from '../assets/mongo.png';
import Docker from '../assets/docker.png';
import Packer from '../assets/packer.png';
import Jenkins from '../assets/jenkins.png';
import Kubernetes from '../assets/kubernetes.png';
import Ansible from '../assets/ansible.png';
import Terraform from '../assets/terraform.png';
import AWS from '../assets/aws.png';
import Go from '../assets/go.png';
import py from  '../assets/py.png';
import mysql from  '../assets/mysql.png';
import postgres from  '../assets/postgres.png';
import postman from  '../assets/postman.png';

const Skills = () => {
  return (
    <div name='skills' className='w-full min-h-screen bg-[#0a192f] text-gray-300'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
          <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Skills</p>
          <p className='py-4'>These are the technologies I've worked with</p>
        </div>

        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          {/* Skill items */}
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
            <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Node} alt="Node.js icon" />
            <p className='my-4'>NODE JS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Go} alt="Golang icon" />
            <p className='my-4'>GOLANG</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={py} alt="Python icon" />
            <p className='my-4'>PYTHON</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={mysql} alt="MySQL icon" />
            <p className='my-4'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={postgres} alt="PostgreSQL icon" />
            <p className='my-4'>POSTGRESQL</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={AWS} alt="AWS icon" />
            <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GCP} alt="GCP icon" />
            <p className='my-4'>GCP</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={GitHubActions} alt="GitHub Actions icon" />
            <p className='my-4'>GITHUB ACTIONS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Jenkins} alt="Jenkins icon" />
            <p className='my-4'>JENKINS</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Docker} alt="Docker icon" />
            <p className='my-4'>DOCKER</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Packer} alt="Packer icon" />
            <p className='my-4'>Packer</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Kubernetes} alt="Kubernetes icon" />
            <p className='my-4'>KUBERNETES</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Ansible} alt="Ansible icon" />
            <p className='my-4'>ANSIBLE</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Terraform} alt="Terraform icon" />
            <p className='my-4'>TERRAFORM</p>
          </div>
          <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon" />
            <p className='my-4'>MONGO DB</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
