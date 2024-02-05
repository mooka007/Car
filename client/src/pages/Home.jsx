import React from "react";
import WhyChooseUs from "../components/WhyChooseUs"
import Services from "../components/Services";
import Offers from "../components/Offers";
import Client from "../components/Client";
import HeroSection from "../components/HeroSection";

const Home = () => {
    return(
        <div className="w-full ">
            <div className="max-w-container">
                <HeroSection />
                <WhyChooseUs />
                <Services />
                <Offers />
                <Client />
            </div>
        </div>
    )
}

export default Home;