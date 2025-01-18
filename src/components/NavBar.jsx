// import React from 'react'

function NavBar() {
    return (
        <div className='container fixed z-50'>
            <nav className=' w-[1200px] flex items-center justify-between pt-8 bg-black bg-opacity-90'>
                <div className="">
                    <h1 className='text-4xl font-bold text-yellow-400'>Numan Ahmed</h1>
                </div>
                <div className="">
                    <ul className='flex space-x-5 text-zinc-400'>
                        <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#home">Home</a></li>
                        <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#about">About</a></li>
                        <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#projects">Projects</a></li>
                        <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#resume">Resume</a></li>
                        <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default NavBar