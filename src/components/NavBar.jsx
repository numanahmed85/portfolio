// import React from 'react'

function NavBar() {
    return (
        <div>
            <nav className="fixed top-0 left-0 w-full bg-black shadow-md z-50">
                <div className="w-[1200px] flex justify-center items-center m-auto px-4 py-4">
                    <div className="container mx-auto flex justify-between items-center py-4">
                        <div className=" ">
                            <h1 className='text-4xl font-bold text-yellow-400'>Numan Ahmed</h1>
                        </div>
                        <div className="">
                            <ul className='text-zinc-400 flex space-x-5  '>
                                <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#home">Home</a></li>
                                <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#about">About</a></li>
                                <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#projects">Projects</a></li>
                                <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#resume">Resume</a></li>
                                <li className='hover:text-yellow-400 hover:font-semibold cursor-pointer'><a href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar