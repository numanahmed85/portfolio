

function Footer() {
    return (
        <div className="container text-center flex flex-col space-y-5">
            {/* Social Meida */}
            <div>
                <p className="text-zinc-400">Find &amp; Follow Me</p>
                <div className="mt-5 space-x-4 text-xl">
                    <button className="bg-zinc-900 w-12 h-12 rounded-full hover:text-yellow-400"><i className="fa-brands fa-linkedin-in"></i></button>
                    <button className="bg-zinc-900 w-12 h-12 rounded-full hover:text-yellow-400"><i className="fa-brands fa-x-twitter"></i></button>
                    <button className="bg-zinc-900 w-12 h-12 rounded-full hover:text-yellow-400"><i className="fa-brands fa-facebook-f"></i></button>
                    <button className="bg-zinc-900 w-12 h-12 rounded-full hover:text-yellow-400"><i className="fa-brands fa-instagram"></i></button>
                    <button className="bg-zinc-900 w-12 h-12 rounded-full hover:text-yellow-400"><i className="fa-brands fa-youtube"></i></button>
                </div>
            </div>

            {/* Contact Form */}
            <div>

            </div>

            {/* Copy Rigths */}
            <div>
                <p className="text-zinc-400">Copyright ©2025 All rights reserved by Numan Ahmed</p>
            </div>
        </div>
    )
}

export default Footer