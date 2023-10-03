import { useEffect, useState } from "react";
import MainSection from "../components/MainSection";
import Navbar from "../components/Navbar";
import PopularMovie from "../components/PopularMovie"

import axios from "axios";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function HalamanHome1() {
    const [trandingMovies, setTrandingMovies] = useState([]);
    // console.log(trandingMovies)

    useEffect(() => {
        const getTrandingMovies = async () => {
            try {
                const respons = await axios.get(
                    `${import.meta.env.VITE_API_URL}/trending/movie/day?language=en-US&page=1`,
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
                    if (i <= 9) {
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


    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true,
        speed: 800,

        appendDots: (dots) => (
            <div className="relative">
                <ul className="flex items-center justify-center absolute bottom-10 border-2 border-red-600 bg-white bg-opacity-30 mx-20 rounded-full lg:bottom-52 lg:mx-[550px] right-0 left-0">
                    {dots}
                </ul>
            </div>
        )
    };


    return (
        <div>
            <Navbar />

            <div className="w-full bg-black pb-5">
                <Slider {...settings}>
                    {trandingMovies.map((movie) => (
                        <div key={movie.id}>
                            <MainSection
                                // trailer={`${import.meta.env.VITE_TRAILER}/${movie.id}/videos?language=en-US`}
                                trailer={movie.id}
                                imageURL={import.meta.env.VITE_TRANDING_IMG + movie.backdrop_path}
                                title={movie.title}
                                overview={movie.overview}
                            />
                        </div>
                    ))}
                </Slider>
            </div>

            <PopularMovie />

        </div >
    )
}

export default HalamanHome1;