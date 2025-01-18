// import React from 'react'
import WeatherApp from '../assets/images/weather-app.png'
import TravelApp from '../assets/images/travel-app.png'

function Projects() {
    return (
        <div className="container" id='projects'>
            <div className="flex flex-col items-center text-center">
                <div className="">
                    {/* <h1 className="text-6xl font-bold relative z-50">Projects</h1> */}
                    <h1 className="text-8xl font-extrabold text-zinc-900">Projects</h1>
                </div>
                <div className="flex items-center">
                    <h1 className="top-0 text-zinc-400 text-xl">Projects displaying below are developed for &ldquo;<span className="text-yellow-300 font-serif"> Portfolio Purpose only</span> &rdquo;</h1>
                </div>
                {/* Project Cards */}
                <div className='mt-10 flex space-x-9 text-left'>

                    {/* Cards-1 */}
                    <div className="rounded-lg w-[350px]">
                        <img className='rounded-lg w-[350px] h-[250px] object-center hover:scale-110' src={WeatherApp} alt='weather-app'></img>
                        <div className='p-3'>
                            <h1 className='text-xl font-bold text-yellow-300 py-3 uppercase '>City Weather App</h1>
                            <p className='text-zinc-400 font-light'>The following process was adopted for the App Development phase:
                                <ul>
                                    <li><span className='font-semibold'>Language: </span>HTML + Java</li>
                                    <li><span className='font-semibold'>Framework: </span>Vue.js + Tailwindcss</li>
                                    <li><span className='font-semibold'>Library: </span>Libraries: Vue</li>
                                    <li><span className='font-semibold'>API: </span> Free Weather API (https://www.weatherapi.com/).</li>

                                </ul>
                            </p>
                        </div>
                    </div>

                    {/* Cards-2 */}
                    <div className="rounded-lg w-[350px]">
                        <img className='rounded-lg w-[350px] h-[250px] object-center hover:scale-110' src={TravelApp} alt='travel-app'></img>
                        <div className='p-3'>
                            <h1 className='text-xl font-bold text-yellow-300 py-3 uppercase '>Travel App</h1>
                            <p className='text-zinc-400 font-light'>Analyzed music store data using advanced SQL queires to identify gaps and increase the business growth.</p>
                        </div>
                    </div>

                    {/* Cards-3 */}
                    <div className="rounded-lg w-[350px]">
                        <img className='rounded-lg w-[350px] h-[250px] object-center hover:scale-110' src='https://www.popwebdesign.net/popart_blog/wp-content/uploads/2021/01/car-dealership-web-app.jpg' alt='car-app'></img>
                        <div className='p-3'>
                            <h1 className='text-xl font-bold text-yellow-300 py-3 uppercase '>Car App</h1>
                            <p className='text-zinc-400 font-light'>Analyzed music store data using advanced SQL queires to identify gaps and increase the business growth.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects