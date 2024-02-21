import React from "react";


export const ValidateEmail = () => {
    return (
        <div class="bg-neutralSilver relative   flex items-center  n justify-center overflow-hidden z-50 mt-20">
        <div class="relative mx-auto h-full px-4 mt-20 pb-20   md:pb-10 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8">
            <div class="flex  items-center justify-center lg:flex-row py-16">
                <div class=" relative ">
                    {/* <div class=" absolute top-0 -left-48 z-0  opacity-50 ">
                        <img src="https://placehold.co/200x100" class="w-36 z-0  h-full    object-fill fill-y text-y   " />
                    </div> */}
                    <div class="lg:max-w-xl lg:pr-5 relative z-40">
                        {/* <p class="flex text-sm uppercase text-g1  ">
                            
                            About Us
                        </p> */}
                        <h2 class="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-g1 sm:text-7xl sm:leading-snug">
                        Thank you for  
                            <span class="my-1 inline-block border-b-8 border-g4 bg-white px-4 font-bold text-g4 animate__animated animate__flash">Registering!</span>
                        </h2>
                        <p class="text-base text-gray-700">Please check your email inbox for further instructions to complete the validation process</p>
                        <div class="mt-10 flex flex-col items-center md:flex-row">
                            
                            <a href="#" aria-label="" class="group inline-flex items-center font-semibold text-g1">Watch how
                                it works
                                <svg xmlns="http://www.w3.org/2000/svg" class="ml-4 h-6 w-6 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div> 

    </div>
    )
}