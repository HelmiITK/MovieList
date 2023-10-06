// import PropTypes from "prop-types"
import axios from "axios";
import { useEffect, useState } from "react";
import { FiChevronsRight } from "react-icons/fi";
import { Link } from "react-router-dom"
// import DetailFilm from "../pages/DetailFilm";

function PopularMovie() {

    const [popularMovies, setPopularMovies] = useState([]);
    const [showAll, setShowAll] = useState(false);
    // console.log(trandingMovies)

    useEffect(() => {
        const getPopularMovies = async () => {
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
                setPopularMovies(trending);

            } catch (error) {
                if (axios.isAxiosError(error)) {
                    alert(error?.response?.data?.status_message);
                    return;
                }
                alert(error?.message);
            }
        };

        getPopularMovies();
    }, []);

    if (popularMovies.length === 0) {
        return <h1>Loading...</h1>;
    }

    const handleClick = () => {
        setShowAll(!showAll);
    };

    return (
        <>
            <div className="w-full bg-black p-8">
                <div className="flex justify-between mb-10">
                    <header className="text-white text-lg lg:text-5xl font font-extrabold hover:text-red-600">Popular Movie</header>
                    <div className="group">
                        <button
                            onClick={handleClick}
                            type="button"
                            className="flex items-center group-hover:text-white text-red-600 lg:text-xl gap-2 lg:mr-5 ">
                            {showAll ? 'See Some Movies' : 'See All Movies'}
                            <FiChevronsRight className="text-red-600 w-10 h-11 group-hover:text-white" />
                        </button>
                    </div>
                </div>
                <div className="grid lg:grid-cols-4 md:grid-cols-2">
                    {showAll ? (
                        popularMovies.map((movie) => (
                            <div key={movie.id}>
                                <div className="border-2 border-red-800 hover:border-white p-2 m-4 flex justify-center cursor-pointer">
                                    <Link to={`/detail-film/${movie.id}`}>
                                        <img
                                            className="flex justify-center items-center content-center opacity-60 hover:opacity-100 "
                                            src={import.meta.env.VITE_BASEIMGURL + movie.poster_path}
                                            alt="poster path"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))
                    ) : (
                        popularMovies.slice(0, 4).map((movie) => (
                            <div key={movie.id}>
                                <div className="border-2 border-red-800 hover:border-white p-2 m-4 flex justify-center cursor-pointer">
                                    <Link to={`/detail-film/${movie.id}`}>
                                        <img
                                            className="flex justify-center items-center content-center opacity-60 hover:opacity-100 "
                                            src={import.meta.env.VITE_BASEIMGURL + movie.poster_path}
                                            alt="poster path"
                                        />
                                    </Link>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>

            {/* <DetailFilm data={`/detail-film/${trandingMovies.title}`} /> */}
        </>
    )
}

export default PopularMovie;
