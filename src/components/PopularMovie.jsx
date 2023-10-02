function PopularMovie() {
    return (
        <div className="bg-black w-full">
            <header className="text-white">Popular Movies</header>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mr-8">
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
                <div className="border-2 w-full h-full m-4 p-4 text-white">kotak</div>
            </div>

            {/* <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/watch?v=PCBUcSoiEu4&t=782s"
                title="Movie Trailer"
                frameBorder="0"
                allowFullScreen
            /> */}

            {/* <video src="https://www.youtube.com/watch?v=PCBUcSoiEu4&t=782s" controls width="900" type="video/mp4"></video> */}
        </div>
    )
}

export default PopularMovie;