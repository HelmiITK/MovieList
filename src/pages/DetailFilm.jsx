import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom"
import { AiFillStar } from "react-icons/ai"
import Footer from "../components/Footer";
import { BsCalendarDateFill } from "react-icons/bs"
import { MdOutlineSlowMotionVideo } from "react-icons/md"
import { FiChevronsLeft } from "react-icons/fi"
import { FaPlay } from "react-icons/fa6"
function DetailFilm() {
    const { movieId } = useParams();

    const [detailMovies, setDetailMovies] = useState();
    // console.log(trandingMovies)

    useEffect(() => {
        const getDetailMovies = async () => {
            try {
                const respons = await axios.get(
                    `${import.meta.env.VITE_API_URL}/movie/${movieId}?language=en-US&page=1`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
                        },
                    }
                );

                console.log(respons.data)

                if (respons.data) {
                    setDetailMovies(respons.data);
                }

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };

        getDetailMovies();
    }, [movieId]);
    // console.log(popularMovies)
    // if (popularMovies.length === 0) {
    //     return <h1>Nungguin yah....</h1>;
    // }

    if (!detailMovies) {
        return <div>Loading...</div>
    }

    return (
        <div className="w-full">
            <Navbar />
            <img className="w-full" src={import.meta.env.VITE_TRANDING_IMG + detailMovies.backdrop_path} />
            <div className="relative text-white">
                <Link as={Link} to="/">
                    <button className="border-t-2 border-r-2 hover:border-t-black hover:border-r-black hover:bg-red-600 hover:text-black border-red-600 bg-black w-32 h-10 p-2 absolute rounded-r-full flex gap-3 items-center text-red-600 text-xl font-bold bottom-[1070px] left-0 ">
                        <FiChevronsLeft className="w-9 h-14" />
                        Back
                    </button>
                </Link>
                <div className="absolute flex flex-col justify-center bottom-[600px] left-10">
                    <div className="text-6xl font-extrabold mb-4">
                        {detailMovies.original_title}
                    </div>
                    <div className="flex gap-3">
                        {detailMovies.genres.map((genre, key) => (
                            <li key={key} type="none" className="text-white text-lg font-medium">{detailMovies.genres[key].name}</li>
                        ))}
                    </div>
                    <div className="text-lg w-[700px] mt-4 mb-4">
                        {detailMovies.overview}
                    </div>
                    <div className="text-lg font-bold mb-3 flex gap-2">
                        <BsCalendarDateFill className="text-green-400" />
                        {detailMovies.release_date}
                    </div>
                    <div className="font-medium text-lg">
                        <i className="flex">
                            <AiFillStar className="text-yellow-600" />
                            {detailMovies.vote_average}
                        </i>
                    </div>
                    <div className="hover:text-red-500 mt-3 cursor-pointer border-2 border-red-600 bg-red-600 p-2 w-48 rounded-3xl hover:bg-black text-lg font-bold">
                        <Link as={Link} to={`/trailer/${detailMovies.id}`}>
                            <button type="button" className="flex gap-3 items-center ml-3 ">
                                <FaPlay/>
                                Watch Trailer
                            </button>
                        </Link>
                    </div>
                </div>
                <Link as={Link} to={`/trailer/${detailMovies.id}`}>
                    <MdOutlineSlowMotionVideo className="text-[250px] hover:text-red-600  absolute right-72 bottom-[700px] animate-pulse " />
                </Link>
                <Footer />
            </div>
        </div>

    )
}

export default DetailFilm;