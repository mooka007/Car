import React, { useEffect,useState, useRef } from "react";
import bannerr1 from "../assets/bannerr1.jpg"
import bannerr2 from "../assets/bannerr2.jpg"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";


const HeroSection = () => {
    const images = [bannerr1, bannerr2];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 9000);

    return () => clearInterval(interval);
    }, []);
    //  animation
    const textIntro = elem => {  
        gsap.from(elem, {
            xPercent: 8,
            // opacity: 0,
            stagger: 1.2,
            duration: 2,
            scale: 1,
            ease: "back",
        });
    };
    let intro = useRef(null)
        useEffect(() => {
            textIntro(intro)
        }, [])

    return(
        <div style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundSize: 'cover',
        backgroundPosition: 'center', transition: 'opacity 0.5s ' }} className="w-full relative bg-cover bg-center mt-24 px-20 lg:py-6 py-20  h-[40rem] ">
            <div className="intro  lg:mt-40 lg:ml-60 text-left" ref={(el) => (intro = el)}>
                <div className="  text-4xl  font-light text-white leading-none" >For Rent <span className="before block absolute inset-1 skew-y-3 bg-yellow-500 relative inline-block text-white">$70</span> Per Day</div>
                <div className="mt-6 text-5xl font-bold text-white ">Reserved Now & Get 50% off</div>
                <button className="mt-10 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-300 to-blue-700  text-white hover:-translate-y-4 outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    RESERVE NOW!
                </button>
            </div>
        </div>
    )
}

export default HeroSection;