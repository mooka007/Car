import React, { useEffect,useState } from "react";
import bannerr1 from "../assets/bannerr1.jpg"
import bannerr2 from "../assets/bannerr2.jpg"



const HeroSection = () => {
    const images = [bannerr1, bannerr2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
    }, []);


    return(
        <div style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover',
        backgroundPosition: 'center', transition: 'opacity 0.5s ' }} className="w-full relative bg-cover bg-center mt-24 px-20 lg:py-6 py-20  h-[40rem] ">
            <div className=" lg:mt-40 lg:ml-60 text-left">
                <div className="text-4xl  font-light text-white leading-none">For Rent $70 Per Day</div>
                <div className="mt-6 text-5xl font-bold text-white ">Reserved Now & Get 50% off</div>
                <button className="mt-10 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-300 to-blue-700  text-white hover:-translate-y-4 outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    RESERVE NOW!
                </button>
            </div>
        </div>
    )
}

export default HeroSection;