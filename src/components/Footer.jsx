import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Link } from "react-router-dom"

function Footer() {
    return (
        <>
            <div className="w-full bg-black border-t-2 border-t-red-600 pt-10 px-8 pb-8">
                <div className="lg:flex lg:justify-around md:flex ">
                    <div className="md:border-r-2 md:border-r-red-600 flex items-center  p-10" >
                        <header className="text-white font-extrabold text-2xl  lg:text-5xl ">MovieList</header>
                    </div>
                    <div className="text-lg">
                        <p className="text-white font-bold text-xl mb-2">From Me</p>
                        <div className="text-red-600">
                            <p>Balikpapan</p>
                            <p>Informatika Angkatan 21</p>
                            <div className="flex items-center group">
                                <AiFillInstagram className="group-hover:text-white" />
                                <Link
                                    to={'https://www.instagram.com/itk_official/'}
                                    target="_blank"
                                    className="hover:text-white cursor-pointer"
                                    title="@itk_official">
                                    <p className="ml-1">Institut Teknologi Kalimantan</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-lg">
                        <p className="text-white font-bold text-xl mb-2">My Partner</p>
                        <div className="text-red-600">
                            <div className="flex items-center group">
                                <AiFillInstagram className="group-hover:text-white" />
                                <Link
                                    to={'https://www.instagram.com/academybinar/'}
                                    target="_blank"
                                    className="hover:text-white cursor-pointer"
                                    title="@academybinar">
                                    <p className="ml-1">Binar Academy</p>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="text-lg">
                        <p className="text-white font-bold text-xl mb-2">Follow Me</p>
                        <div className="text-red-600 flex flex-col gap-3">
                            <Link
                                to={'https://www.instagram.com/helmitwzzz/'}
                                target="_blank"
                                title="@helmitwzzz">
                                <AiFillInstagram className="w-9 h-9 hover:text-white cursor-pointer" />
                            </Link>
                            <Link
                                to={'https://github.com/HelmiITK'}
                                target="_blank"
                                title="HelmiITK">
                                <AiFillGithub className="w-9 h-9 hover:text-white cursor-pointer" />
                            </Link>
                            <Link
                                to={'https://www.linkedin.com/in/helmi-a53b55286/'}
                                target="_blank"
                                title="Helmi.">
                                <AiFillLinkedin className="w-9 h-9 hover:text-white cursor-pointer" />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-14">
                    <marquee
                        direction="bounce"
                        className="w-72 rounded-2xl h-10 border-2 border-red-600 text-white flex items-center"
                    >
                        <i>Created By Helmi 🚀</i>
                    </marquee>
                </div>
            </div>
        </>
    )
}

export default Footer