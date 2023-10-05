import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom"
import { BiSolidChevronsLeft } from "react-icons/bi"
import Footer from "../components/Footer"

function Trailer() {
    const { movieId } = useParams();

    const [trailerMovies, setTrailerMovies] = useState();

    useEffect(() => {
        const getTrailerMovies = async () => {
            try {
                const respons = await axios.get(
                    `${import.meta.env.VITE_API_URL}/movie/${movieId}/videos?language=en-US`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
                        },
                    }
                );

                console.log(respons.data.results[0])

                if (respons.data.results[0]) {
                    setTrailerMovies(respons.data.results[0]);
                }

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };

        getTrailerMovies();
    }, [movieId]);

    if (!trailerMovies) {
        return <div>Loading...</div>
    }

    const videoUrl = `https://www.youtube.com/watch?v=${trailerMovies.key}`

    return (
        <>
            {/* <div>{movieId}</div> */}
            <div className="w-full bg-black pt-4 pb-12">

                <Link as={Link} to={`/detail-film/${movieId}`}>
                    <button className="mt-4 border-t-2 border-r-2 hover:border-t-black hover:border-r-black hover:bg-red-600 hover:text-black border-red-600 bg-black w-32 h-10 p-2 rounded-r-full flex gap-3 items-center text-red-600 text-xl font-bold ">
                        <BiSolidChevronsLeft className="w-10 h-12" />
                        Back
                    </button>
                </Link>
                <div className="flex flex-col items-center">
                    <iframe
                        src={`https://www.youtube.com/embed/${trailerMovies.key}`}
                        frameBorder="0"
                        className="w-[1300px] h-[550px]"
                        allowFullScreen
                    >
                    </iframe>
                    <p className="text-white font-bold text-2xl mt-7">
                        <Link
                            className="border-2 border-red-600 p-3 px-6 rounded-full hover:bg-red-800 hover:border-red-800"
                            to={videoUrl}
                            target="_blank"
                            rel="noopener noreferrer">
                            Watch on Youtube
                        </Link>
                    </p>
                </div>
            </div>
                <Footer />
        </>
    )
}

export default Trailer;

