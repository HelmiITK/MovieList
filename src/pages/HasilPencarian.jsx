// import { useEffect, useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import axios from "axios";
// import PopularMovie from "../components/PopularMovie";

function HasilPencarian() {
    // const [searchParams] = useSearchParams();
    // const [searchMovie, setSearchMovie] = useState([]);

    // const query = searchParams.get("query");
    // const page = searchParams.get("page");
    // const IMAGE_PATH = import.meta.env.VITE_TRANDING_IMG;


    // useEffect(() => {
    //     const getSearchMovie = async () => {
    //         try {
    //             // Get the data from API with query and page variable
    //             const response = await axios.get(
    //                 `${import.meta.env.VITE_API_URL
    //                 }/search/movie?query=${query}&page${page}`,
    //                 {
    //                     headers: {
    //                         Authorization: `Bearer ${import.meta.env.VITE_API_AUTH_TOKEN}`,
    //                     },
    //                 }
    //             );
    //             // Set state for the movie that have been searched
    //             const { data } = response;
    //             setSearchMovie(data?.results);
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     getSearchMovie();
    // }, [query, page]);


    return (
        <>
            {/* <div className="max-w-screen-2xl mx-auto mb-10">
                <h1 className="font-semibold text-3xl pt-48 ml-6 md:text-4xl md:ml-10 md:pt-28 mb-5">
                    {searchParams}
                </h1>
                <div className="flex justify-center items-center flex-wrap p-2 2xl:max-w-screen-2xl gap-5">
                    {searchMovie.map((movie) => (
                        <div key={movie}>
                            <PopularMovie

                            />
                        </div>
                    ))}

                </div>
            </div> */}
        </>
    )
}

export default HasilPencarian;