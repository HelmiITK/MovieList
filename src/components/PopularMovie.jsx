// import PropTypes from "prop-types"
import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";

function PopularMovie() {

    const [trandingMovies, setTrandingMovies] = useState([]);
    const [showAll, setShowAll] = useState(false);
    // console.log(trandingMovies)

    useEffect(() => {
        const getTrandingMovies = async () => {
            try {
                const respons = await axios.get(
                    `${import.meta.env.VITE_API_URL}/movie/popular`,
                    {
                        headers: {
                            Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
                        },
                    }
                );

                const { data } = respons;
                // console.log(data.results[0]);
                const trending = []
                for (let i = 0; i <= data.results.length; i++) {
                    if (i <= 19) {
                        trending.push(data.results[i])
                    }

                }
                setTrandingMovies(trending);

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };

        getTrandingMovies();
    }, []);

    if (trandingMovies.length === 0) {
        return <h1>Nungguin yah....</h1>;
    }

    const handleClick = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <div className="w-full bg-black p-8">
                <div className="flex justify-between mb-10">
                    <header className="text-white lg:text-5xl font font-extrabold hover:text-red-600">Popular Movie</header>
                    <button
                        onClick={handleClick}
                        type="button"
                        className="flex items-center hover:text-white text-red-600 lg:text-xl gap-2 mr-5 ">
                        {showAll ? 'See Some Movies' : 'See All Movies'}
                        <FiChevronsRight className="text-red-600 w-10 h-11 hover:text-white" />
                    </button>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    {showAll ? (
                        trandingMovies.map((movie) => (
                            <div key={movie.id}>
                                <div className="border-2 border-red-800 hover:border-white p-2 m-4 flex justify-center cursor-pointer">
                                    <img
                                        className="flex justify-center items-center content-center opacity-60 hover:opacity-100 "
                                        src={import.meta.env.VITE_BASEIMGURL + movie.poster_path}
                                        alt="poster path"
                                    />
                                </div>
                            </div>
                        ))
                    ) : (
                        trandingMovies.slice(0, 4).map((movie) => (
                            <div key={movie.id}>
                                <div className="border-2 border-red-800 hover:border-white p-2 m-4 flex justify-center cursor-pointer">
                                    <img
                                        className="flex justify-center items-center content-center opacity-60 hover:opacity-100 "
                                        src={import.meta.env.VITE_BASEIMGURL + movie.poster_path}
                                        alt="poster path"
                                    />
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </>
    )
}

export default PopularMovie;
