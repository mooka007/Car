import React from "react";
import car1 from "../assets/cars/car1.jpg"
import car2 from "../assets/cars/car2.jpg"
const AboutUs = () => {
    return(
        <section class="h-full relative pt-16 bg-blueGray-50 mt-20">
            <div class="container mx-auto mt-10">
                <div class="flex flex-wrap items-center">
                        <div class="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-pink-500">
                                <div className="py-3 sm:py-4 transition duration-300 hover:scale-105">
                                    <img
                                    src={car1}
                                    alt="car "
                                    className="w-full rounded-2xl"
                                    />
                                </div>
                            </div>
                        </div>

                        <div class="w-full md:w-6/12 px-4">
                        <div class="flex flex-wrap">
                            <div class="w-full md:w-6/12 px-4">
                            <div class="relative flex flex-col mt-4">
                                <div class="px-4 py-5 flex-auto">
                                <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-sitemap"></i>
                                </div>
                                <h6 class="text-xl mb-1 font-semibold">Easy and Convenient Car Rentals</h6>
                                <p class="mb-4 text-blueGray-500">
                                Finding the perfect car for your needs has never been easier. Our renting car website offers a seamless and user-friendly experience, allowing you to browse and book a wide range of vehicles with just a few clicks. Whether you need a compact car for a weekend getaway or a spacious SUV for a family road trip, our website provides a diverse selection to cater to your preferences. Enjoy the convenience of comparing prices, availability, and features all in one place.
                                </p>
                                </div>
                            </div>
                            <div class="relative flex flex-col min-w-0">
                                <div class="px-4 py-5 flex-auto">
                                <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-drafting-compass"></i>
                                </div>
                                <h6 class="text-xl mb-1 font-semibold">
                                Wide Selection of Quality Vehicles

                                </h6>
                                <p class="mb-4 text-blueGray-500">
                                At our renting car website, we take pride in offering a wide selection of high-quality vehicles to suit every occasion. From economy cars for budget-conscious travelers to luxury sedans for those seeking a touch of elegance, we have options to meet various preferences and budgets. Our vehicles are well-maintained, reliable, and equipped with modern features to ensure a comfortable and enjoyable driving experience. Rest assured that we prioritize your safety and satisfaction with our carefully curated fleet.
                                </p>
                                </div>
                            </div>
                            </div>
                            <div class="w-full md:w-6/12 px-4">
                            <div class="relative flex flex-col min-w-0 mt-4">
                                <div class="px-4 py-5 flex-auto">
                                <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-newspaper"></i>
                                </div>
                                <h6 class="text-xl mb-1 font-semibold">Flexible Booking and Competitive Rates</h6>
                                <p class="mb-4 text-blueGray-500">
                                We understand that flexibility is key when it comes to renting a car. Our website provides convenient booking options, allowing you to choose your desired pickup and drop-off locations, dates, and times. Whether you need a car for a few hours, a day, or an extended period, we have flexible rental durations to accommodate your needs. Additionally, we offer competitive rates and transparent pricing, ensuring that you get the best value for your money without any hidden fees or surprises.
                                </p>
                                </div>
                            </div>
                            <div class="relative flex flex-col min-w-0">
                                <div class="px-4 py-5 flex-auto">
                                <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                                    <i class="fas fa-file-alt"></i>
                                </div>
                                <h6 class="text-xl mb-1 font-semibold">Exceptional Customer Service</h6>
                                <p class="mb-4 text-blueGray-500">
                                Customer satisfaction is our top priority. Our renting car website is backed by a dedicated customer service team that is ready to assist you every step of the way. If you have any questions, concerns, or require assistance with your booking, our friendly and knowledgeable representatives are available to provide prompt and helpful support. We strive to make your car rental experience hassle-free, reliable, and enjoyable from start to finish.
                                </p>
                                </div>
                            </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </section>
    )
}

export default AboutUs;