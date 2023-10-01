import { SlMenu, SlMagnifier } from "react-icons/sl"

function Navbar() {
    return (
        <>
            <div className="w-full lg:mx-2 lg:mt-2 fixed">
                <div className="lg:flex justify-between">
                    <div className="text-2xl lg:text-3xl text-red-600 font-bold flex justify-center">
                        <h1>MovieList</h1>
                    </div>
                    <div className="flex mx-2 mt-2 lg:mt-0">
                        <input
                            type="text"
                            className="border-y-2 border-s-2 border-red-600 rounded-s-3xl bg-transparent w-full py-2 px-4 lg:w-[500px] placeholder:text-gray-300 text-white"
                            placeholder="Mau nonton apa hari ini?"
                        />
                        <button>
                            <SlMagnifier type="submit" className="w-11 h-11 p-[7px] border-e-2 border-y-2 rounded-e-3xl text-gray-300 border-red-600 hover:bg-red-600 hover:text-white"/>
                        </button>
                        <button>
                            <SlMenu className="w-10 h-8 lg:hidden ml-4 text-red-600" />
                        </button>
                    </div>
                    <div className="hidden lg:block mr-4">
                        <button className="border-2 text-red-600 border-red-600 rounded-3xl p-2 px-4 mr-2 hover:bg-red-600 hover:text-white">
                            Login
                        </button>
                        <button className="border-2 text-white border-red-600 bg-red-600 rounded-3xl p-2 px-4 hover:bg-red-700 hover:text-white">
                            Registrasi
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;
