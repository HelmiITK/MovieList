import PropTypes from "prop-types"

function MainSection({ imageURL, title, overview }) {

    return (
        <>
            <div className="relative">
                <img
                    src={imageURL}
                    className="h-72 lg:w-full lg:h-[800px] xl:h-full"
                />
                <div className="absolute bottom-10 left-2 lg:top-52 lg:left-4 ">
                    <h1 className="mb-1 border-b border-red-600 inline-block text-white font-bold text-2xl lg:text-8xl lg:mb-4" >
                        {title}
                    </h1>
                    <p className="text-xs mb-4 text-white lg:text-base lg:w-[800px]">
                        {overview}
                    </p>
                    <button className="text-sm border-1 rounded-2xl px-2 py-0.5 border-2 lg:w-44 border-red-600 bg-red-600 lg:py-2 lg:mt-2 text-white lg:font-bold lg:text-lg lg:px-2 lg:rounded-3xl hover:bg-red-800 hover:border-red-800 ">
                        WATCH TRAILER
                    </button>
                </div>
            </div>
        </>
    )
}

export default MainSection;

MainSection.propTypes = {
    imageURL: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    overview: PropTypes.string.isRequired
}