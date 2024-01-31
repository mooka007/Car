import React from "react";
// import bannerr1 from "../assets/bannerr1.jpg"

const Home = () => {
    return(
        <div className="w-full bg-cover bg-center mt-24 px-20 lg:py-6 py-20  h-[40rem] bg-[url('./assets/bannerr1.jpg')] ">
            <div class=" lg:mt-40 lg:ml-60 text-left">
                <div class="text-4xl  font-light text-white leading-none">For Rent $70 Per Day</div>
                <div class="mt-6 text-5xl font-bold text-white ">Reserved Now & Get 50% off</div>
                <button class="mt-6 px-8 py-4 rounded-full font-normal tracking-wide bg-gradient-to-b from-blue-600 to-blue-700 text-white outline-none focus:outline-none hover:shadow-lg hover:from-blue-700 transition duration-200 ease-in-out">
                    RESERVE NOW!
                </button>
            </div>
        </div>
    )
}

export default Home;