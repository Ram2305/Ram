import React from 'react';
import { data } from "../data/data.js";

const Projects = () => {
    return (
        <div name='Projects' className='w-full text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center min-h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6'>Check out my projects</p>
                </div>

                {/* Container for projects */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Grid items */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{
                                backgroundImage: `url(${item.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                            }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100 text-center p-8">
                                <span className="text-2xl font-bold text-white tracking-wider">
                                    {item.name}
                                </span>
                                <div className="pt-8">
                                    {/* Conditional rendering of buttons */}
                                    {item.id === 2 ? (
                                        <a href={item.github} target="_blank" rel="noopener noreferrer">
                                            <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                Code
                                            </button>
                                        </a>
                                    ) : (
                                        <>
                                            {item.github1 && (
                                                <a href={item.github1} target="_blank" rel="noopener noreferrer">
                                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                        Webapp Code
                                                    </button>
                                                </a>
                                            )}
                                            {item.github2 && (
                                                <a href={item.github2} target="_blank" rel="noopener noreferrer">
                                                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                                                        Infra Code
                                                    </button>
                                                </a>
                                            )}
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
