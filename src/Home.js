import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className='relative'>
            <div className="bg-gray-100">
                <div className="relative bg-opacity-75 bg-deep-purple-accent-700 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-md md:px-24 lg:px-20 lg:py-20">
                    <svg
                        className="absolute inset-x-0 bottom-0 text-white"
                        viewBox="0 0 1160 163"
                    >
                        <path
                            fill="currentColor"
                            d="M-164 13L-104 39.7C-44 66 76 120 196 141C316 162 436 152 556 119.7C676 88 796 34 916 13C1036 -8 1156 2 1216 7.7L1276 13V162.5H1216C1156 162.5 1036 162.5 916 162.5C796 162.5 676 162.5 556 162.5C436 162.5 316 162.5 196 162.5C76 162.5 -44 162.5 -104 162.5H-164V13Z"
                        />
                    </svg>
                    <div className="relative grid gap-5 sm:grid-cols-1 lg:grid-cols-2 rounded">
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-3xl">
                            <div className="p-5">

                                <Link to={"addtask"}><a href="#"><p className="mb-2 font-bold p-5">Add Task</p></a></Link>

                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-3xl">
                            <div className="p-5">

                                <a href="#"><p className="mb-2 font-bold p-5">To-Do</p></a>

                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-3xl">
                            <div className="p-5">

                                <a href="#"><p className="mb-2 font-bold p-5">In-progress</p></a>

                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>
                        <div className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-3xl">
                            <div className="p-5">

                                <Link to={"completetask"}><a href="#"><p className="mb-2 font-bold p-5">Completed task</p></a></Link>

                            </div>
                            <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;