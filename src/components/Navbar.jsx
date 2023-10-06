import { SlMenu, SlMagnifier } from "react-icons/sl"
import { useNavigate } from "react-router-dom";

function Navbar() {
    
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        const searchQuery = e.target.search.value;

        if (searchQuery.trim() === "") {
            return;
        }

        const searchUrl = `/search?query=${searchQuery}&include_adult=false&page=1`;
        // const searchUrl = `/hasil-pencarian/movie?include_adult=false&language=en-US&page=1&query=${searchQuery}`

        navigate(searchUrl)
    }

    return (
        <>
            <div className="w-full lg:mt-2 fixed z-50">
                <div className="lg:flex lg:justify-between lg:mx-2 lg:mt-2">
                    <div className="text-2xl lg:text-3xl text-red-600 font-extrabold flex justify-center">
                        <h1>MovieList</h1>
                    </div>
                    <div className="md:flex md:justify-between md:mr-5">
                        <div className=" flex justify-between mx-2 mr-9 mt-1 lg:mt-0">
                            <form 
                                action="search" 
                                className="flex"
                                onSubmit={handleSearch}>
                                <input
                                    name="search"
                                    type="text"
                                    className=" border-y-2 border-s-2 border-red-600 rounded-s-3xl bg-transparent px-3 lg:w-[550px] placeholder:text-gray-300 text-white"
                                    placeholder="Mau nonton apa hari ini?"
                                />
                                <button type="submit">
                                    <SlMagnifier className="w-11 h-11 p-[7px] border-e-2 border-y-2 rounded-e-3xl text-gray-300 border-red-600 hover:bg-red-600 hover:text-white" />
                                </button>
                            </form>
                            <button>
                                <SlMenu className="w-10 h-8 ml-10 sm:ml-80 md:ml-[450px] lg:hidden text-red-600 " />
                            </button>
                        </div>
                    </div>
                    <div>
                        <div className="hidden lg:block mr-4 ">
                            <button className="border-2 text-red-600 border-red-600 rounded-3xl p-2 px-4 mr-2 hover:bg-red-600 hover:text-white">
                                Login
                            </button>
                            <button className="border-2 text-white border-red-600 bg-red-600 rounded-3xl p-2 px-4 hover:bg-red-700 hover:text-white">
                                Registrasi
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar;


