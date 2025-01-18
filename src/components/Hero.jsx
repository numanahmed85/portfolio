import Numan from "../assets/images/numan_photo.png"

function Hero() {
    return (
        <div className='container' id="home">
            <div className="grid grid-cols-2 justify-center items-center pt-20">
                {/* HERO Left */}
                <div className="col-start-1">
                    <h3 className="text-2xl text-yellow-400 mb-5">Hello!</h3>
                    <h1 className="text-8xl pb-4">I&apos;m <span className="text-yellow-400 font-bold">Numan <br />Ahmed</span></h1>
                    <div className="typewriter mt-5">
                        <span className=" text-4xl font-semibold">A Front-end Developer</span>
                    </div>

                    <div className="mt-20 space-x-5">
                        <button className="h-[50px] w-[150px] bg-yellow-400 rounded-full text-black hover:font-bold">Social</button>
                        <button className="border-2 border-yellow-400 h-[50px] w-[150px] bg-black rounded-full hover:text-yellow-400 hover:font-bold ">My Work</button>
                    </div>
                </div>

                {/* HERO Right */}
                <div className="col-start-2 hero-image">
                    <img src={Numan} alt=""></img>
                </div>
            </div>
        </div>
    )
}

export default Hero
