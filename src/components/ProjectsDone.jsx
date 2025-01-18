// import React from 'react'

function ProjectsDone() {
    return (
        <div className="container">
            <div className="bg-zinc-900 py-7 flex justify-around items-center rounded-lg">
                <div>
                    <h1 className="text-5xl uppercase font-extrabold text-zinc-400">Projects <br />Completed</h1>
                </div>
                <div className="bg-yellow-400 rounded-full p-2 shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)]">
                    <div className="bg-zinc-900 p-8 rounded-full">
                        <h3 className="text-6xl font-bold text-yellow-400">10</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectsDone