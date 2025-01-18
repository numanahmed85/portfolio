// import React from 'react'

function Contact() {
    return (
        <div className="container" id="contact">
            <div className="flex flex-col justify-center items-center">
                <div className="">
                    <h1 className="text-8xl font-extrabold text-zinc-900">Contact</h1>
                    <p></p>
                </div>
                <div className="flex flex-row justify-between w-full mt-5">

                    <div className="flex flex-col items-center space-y-5 text-center">
                        <button className="bg-yellow-400 w-[100px] h-[100px] rounded-full"><i className="fa-solid fa-signs-post text-black text-3xl"></i></button>
                        <h3 className="uppercase font-bold text-xl ">Address</h3>
                        <p className="font-light text-zinc-400">Islamabad-PAK</p>
                    </div>

                    <div className="flex flex-col items-center space-y-5 text-center">
                        <button className="bg-yellow-400 w-[100px] h-[100px] rounded-full"><i className="fa-solid fa-phone text-black text-3xl"></i></button>
                        <h3 className="uppercase font-bold text-xl ">Number</h3>
                        <p className="font-light text-zinc-400">+92 000 1234567</p>
                    </div>

                    <div className="flex flex-col items-center space-y-5 text-center">
                        <button className="bg-yellow-400 w-[100px] h-[100px] rounded-full"><i className="fa-solid fa-envelope text-black text-3xl"></i></button>
                        <h3 className="uppercase font-bold text-xl ">Email Address</h3>
                        <p className="font-light text-zinc-400">info@email.pk</p>
                    </div>

                    <div className="flex flex-col items-center space-y-5 text-center">
                        <button className="bg-yellow-400 w-[100px] h-[100px] rounded-full"><i className="fa-solid fa-file text-black text-3xl"></i></button>
                        <h3 className="uppercase font-bold text-xl" id="resume">Download Resume</h3>
                        <p className="font-light text-zinc-400">Resume Link</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact