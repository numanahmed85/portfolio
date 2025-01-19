// import React from 'react'
import ProjectsDone from '../components/ProjectsDone'

function About() {
    return (
        <div className="container" id="about">
            <div className="grid grid-cols-2 gap-20">
                {/* Skills Section */}
                <div className="col-start-1 bg-zinc-900 rounded-lg px-8 py-4">
                    <div>
                        <h3 className="text-3xl font-bold text-zinc-400">Skills</h3>
                        {/* Languages */}
                        <div className="mt-8">
                            <h3 className="text-yellow-400 font-medium my-3 uppercase">Languages</h3>
                            <div>
                                <div className="pb-2">
                                    <p className="font-light text-zinc-400">HTML 90%</p>
                                    <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-yellow-400 h-2.5 rounded-full w-[90%] progress-animation-1" ></div>
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <p className="font-light text-zinc-400">JavaScript 75%</p>
                                    <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-yellow-400 h-2.5 rounded-full w-[75%] progress-animation-2" ></div>
                                    </div>
                                </div>
                                <div className="pb-2">
                                    <p className="font-light text-zinc-400">CSS 90%</p>
                                    <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                        <div className="bg-yellow-400 h-2.5 rounded-full w-[90%] progress-animation-3" ></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Frameworks */}
                    <div className="mt-8">
                        <h3 className="text-yellow-400 font-medium my-3 uppercase">Frameworks</h3>
                        <div>
                            <div className="pb-2">
                                <p className="font-light text-zinc-400">React.js 70%</p>
                                <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-yellow-400 h-2.5 rounded-full w-[70%] progress-animation-4" ></div>
                                </div>
                            </div>
                            <div className="pb-2">
                                <p className="font-light text-zinc-400">Vue.js 70%</p>
                                <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-yellow-400 h-2.5 rounded-full w-[70%] progress-animation-5" ></div>
                                </div>
                            </div>
                            <div className="pb-2">
                                <p className="font-light text-zinc-400">Tailwindcss 85%</p>
                                <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-yellow-400 h-2.5 rounded-full w-[85%] progress-animation-6" ></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Libraries */}
                    <div className="mt-8">
                        <h3 className="text-yellow-400 font-medium my-3 uppercase">Libraries</h3>
                        <div>
                            <div className="pb-2">
                                <p className="font-light text-zinc-400">React.js 70%</p>
                                <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-yellow-400 h-2.5 rounded-full w-[70%] progress-animation-7" ></div>
                                </div>
                            </div>
                            <div className="pb-2">
                                <p className="font-light text-zinc-400">Vue.js 70%</p>
                                <div className="w-full bg-zinc-700 rounded-full h-2.5 dark:bg-gray-700">
                                    <div className="bg-yellow-400 h-2.5 rounded-full w-[70%] progress-animation-8" ></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* About Section*/}
                <div className="col-start-2">
                    <div>
                        <h1 className="text-8xl text-yellow-400 font-bold">About</h1>
                        <p className="font-light mt-2 text-zinc-400">A front-end developer specializes in creating the user-facing parts of websites and applications, ensuring they are visually appealing, interactive, and user-friendly. They work with technologies like HTML, CSS, and JavaScript to build layouts, design responsive interfaces, and implement features that enhance user experience. Front-end developers often collaborate with designers and back-end developers to bring web projects to life, bridging the gap between visual design and technical functionality.</p>
                    </div>
                    <div className="flex flex-row space-x-9 mt-5">
                        <div className="flex flex-col font-medium text-yellow-400 space-y-3">
                            <p>Profile:</p>
                            <p>Domain:</p>
                            <p>Education:</p>
                            <p>Language:</p>
                            <p>Other Skills:</p>
                            <p>Interest:</p>
                        </div>
                        <div className="font-light space-y-3 text-zinc-400">
                            <p>Front-end Developer</p>
                            <p>General, Ecommerce, Portfolio, Blogs &amp; more...</p>
                            <p>Computer Science</p>
                            <p>English, Urdu, Arabic</p>
                            <p>Graphic design</p>
                            <p>Travel, Food, Learning</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <ProjectsDone />
            </div>
        </div>
    )
}

export default About