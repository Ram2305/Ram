import React from 'react';
import { data } from "../data/data.js";

const Projects = () => {
    return (
        <div name='Projects' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Projects
                    </p>
                    <p className='py-6'>Check out my projects</p>
                </div>

                {/* container for projects */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                    {/* Grid Item */}
                    {data.map((item, index) => (
                        <div
                            key={index}
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
                        >
                            {/* Hover effect for images */}
                            <div className="opacity-0 group-hover:opacity-100">
                                <span className="text-2xl font bold text-white tracking-wider">
                                    {item.name}
                                </span>
                                <div className="pt-8 text-center">
                                    {/* Conditionally render a single button for id 2 */}
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
