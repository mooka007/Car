import React from "react";
// import bannerr1 from "../assets/bannerr1.jpg"

const Home = () => {
    return(
        <div className=" bg-gray-50 flex items-center">
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
            {/* section */}
            <div class="w-full bg-cover bg-center mt-24 py-48  h-[40rem] bg-[url('./assets/bannerr1.jpg')] ">
                <div class="container mx-auto text-left text-white">
                    <div class="flex items-center ">
                        <div class="w-1/2">
                            <h1 className="text-5xl font-medium mb-6" >For Rent $70 Per Day</h1>
                            <p className="text-xl mb-12">Reserved Now & Get 50% off</p>
                            <a href="" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Demo</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    //     <div class="h-screen bg-gray-50 flex items-center">
    //     <section class="bg-cover bg-center py-32 w-full" style="background-image: url('https://source.unsplash.com/random');">
    //         <div class="container mx-auto text-left text-white">
    //             <div class="flex items-center">
    //                 <div class="w-1/2">
    //                     <h1 class="text-5xl font-medium mb-6">Welcome to My Agency</h1>
    //                     <p class="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
    //                         euismod odio, gravida pellentesque urna varius vitae.</p>
    //                     <a href="#" class="bg-indigo-500 text-white py-4 px-12 rounded-full hover:bg-indigo-600">Demo</a>
    //                 </div>
    //                 <div class="w-1/2 pl-16">
    //                     <img src="https://source.unsplash.com/random?ux" class="h-64 w-full object-cover rounded-xl" alt="Layout Image">
    //       </div>
    //                 </div>
    //             </div>
    //     </section>
    // </div>
    )
}

export default Home;