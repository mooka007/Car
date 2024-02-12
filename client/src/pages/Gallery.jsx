import React, {useState} from "react";
import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
  } from "tw-elements-react";

const Gallery = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownItems = ['High to low', 'Low to high'];
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };
    return (
        <div className='text-center my-60  '>
            <section class="bg-white dark:bg-gray-900">
                <div class="container px-6 py-8 ">
                    <div class="lg:flex lg:-mx-2">
                        <div class="text-start space-x-3 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline"></a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Kia</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Audi</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">BMW</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Lexus</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Toyota</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hyundai</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Mercedes</a>
                            <a href="#" class="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Volkswagen</a>
                        </div>
                        <div class="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div class="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p class="text-gray-500 dark:text-gray-300">6 Items</p>
                                <div class="flex items-center">
                                    <p class="text-gray-500 dark:text-gray-300 mr-4"></p>
{/*  */}
                                    <TEDropdown className="flex justify-center">
                                        <TERipple rippleColor="light">
                                            <TEDropdownToggle className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                             Sort By: 👇
                                                {/* <span className="ml-2 [&>svg]:w-5 w-2">
                                                    <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                    >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                                        clipRule="evenodd"
                                                    />
                                                    </svg>
                                                </span> */}
                                            </TEDropdownToggle>
                                        </TERipple>

                                        <TEDropdownMenu>
                                            <TEDropdownItem>
                                            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                Low to high
                                            </a>
                                            </TEDropdownItem>
                                            <TEDropdownItem>
                                            <a href="#" className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                High to low
                                            </a>
                                            </TEDropdownItem>
                                        </TEDropdownMenu>
                                    </TEDropdown>
{/*  */}
                                    {/* <select class="font-medium text-gray-700 bg-transparent dark:text-gray-500 focus:outline-none">
                                        <option value="#">Recommended</option>
                                        <option value="#">Size</option>
                                        <option value="#">Price</option>
                                    </select> */}
                                </div>
                            </div>

                            <div class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Tayota</h4>
                                    <p class="text-blue-500">$12.55 /h</p>

                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        <span class="mx-1">Add to cart</span>
                                    </button>
                                </div>

                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200"> Tayota</h4>
                                    <p class="text-blue-500">$18.70 /h</p>

                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        <span class="mx-1">Add to cart</span>
                                    </button>
                                </div>

                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Tayota</h4>
                                    <p class="text-blue-500">$16.55 /h</p>

                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        <span class="mx-1">Add to cart</span>
                                    </button>
                                </div>

                                <div class="flex flex-col items-center justify-center w-full max-w-lg mx-auto"> 
                                    <img class="object-cover w-full rounded-md h-72 xl:h-80" src="https://images.unsplash.com/photo-1621993202323-f438eec934ff?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="T-Shirt" />
                                    <h4 class="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">Tayota</h4>
                                    <p class="text-blue-500">$12.55 /h</p>

                                    <button class="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                                        </svg>
                                        <span class="mx-1">Add to cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery