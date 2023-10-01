import { useEffect, useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs"
// import { RxDotFilled } from "react-icons/rx"
import { HiOutlineMinusSm } from "react-icons/hi"

function MainSection() {
    const slides = [
        {
            url: '../../public/2019_04_24-16_14_36_71d2d5d3509bbffcbe64a240a8857fe6_960x640_thumb.jpg'
        },
        {
            url: '../../public/MountainofBromo.jpg'
        },
        {
            url: '../../public/Mountain.jpg'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    
    useEffect(() => {
        const autoSlide =  setInterval(() => {
            setCurrentIndex((e) => (e + 1) % slides.length); 
        }, 5000);
        return() => clearInterval(autoSlide);
    }, [currentIndex, slides.length]);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <>
            <div className="max-w-[2000px] h-[925px] w-full m-auto group">
                <div
                    style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
                    className="w-full h-full bg-center bg-cover duration-700 flex justify-center items-end pb-8 cursor-pointer" 
                >
                    {slides.map((slide, slideIndex) => (
                        <div key={slideIndex}>  
                            <HiOutlineMinusSm 
                                onClick={() => goToSlide(slideIndex)} 
                                className="w-10 h-10 text-slate-300 hover:text-white hover:w-12 hover:h-12"/>
                        </div>
                    ))}
                </div>

                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[45%] -translate-x-0 translate-y-[50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <BsChevronCompactRight onClick={nextSlide} size={30} />
                </div>
            </div>
        </>
    )
}

export default MainSection;
