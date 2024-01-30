import React from "react";
import {Carousel } from "flowbite-react";
import bannerr1 from "../assets/bannerr1.jpg"

const Home = () => {
    return(
        <div className="bg-neutralSilver">23.46
            {/* <div className="px-4 lg:px-14  mx-auto  h-f">
                <Carousel className="w-full mx-auto">
                    <div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
                        <div>
                            <img src={bannerr1} alt="" />
                        </div>
                    </div>
                    <div className="flex h-full items-center justify-center">
                    Slide 2
                    </div>
                    <div className="flex h-full items-center justify-center">
                    Slide 3
                    </div>
                </Carousel>
            </div> */}
            <div class="w-full bg-cover bg-center h-[80rem] bg-[url(https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80)]">
                <div class="flex items-center justify-center h-full w-full bg-gray-900 bg-opacity-50">
                    <div class="text-center">
                        <h1 class="text-white text-2xl font-semibold uppercase md:text-3xl">Build Your new <span class="underline text-blue-400">Saas</span></h1>
                        <button class="mt-4 px-4 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">Start project</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;