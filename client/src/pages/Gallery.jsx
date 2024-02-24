import React, {useEffect, useState} from "react";
import { usePostsContext } from '../hooks/useCars';
import { usePosting } from '../hooks/useCarsHooks'

import {
    TEDropdown,
    TEDropdownToggle,
    TEDropdownMenu,
    TEDropdownItem,
    TERipple,
  } from "tw-elements-react";
import { Post } from "../components/Posts";

const Gallery = () => {
    const { posts, dispatch } = usePostsContext();
    const { fetchPosts} = usePosting();
    useEffect(()=>{
        fetchPosts();
    },[dispatch, posts])
    // const [isOpen, setIsOpen] = useState(false);

    // const toggleDropdown = () => {
    //   setIsOpen(!isOpen);
    // };
    return (
        <div className='text-center my-60  '>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 ">
                    <div className="lg:flex lg:-mx-2">
                        <div className="text-start space-x-3 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"></a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Kia</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Audi</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">BMW</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Lexus</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Toyota</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Hyundai</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Mercedes</a>
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline">Volkswagen</a>
                        </div>
                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p className="text-gray-500 dark:text-gray-300">6 Items</p>
                                <div className="flex items-center">
                                    <p className="text-gray-500 dark:text-gray-300 mr-4"></p>
                                    <TEDropdown className="flex justify-center">
                                        <TERipple rippleColor="light">
                                            <TEDropdownToggle className="block w-full min-w-[160px] cursor-pointer whitespace-nowrap bg-transparent px-4 py-2 text-sm text-left font-normal pointer-events-auto text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:bg-neutral-100 focus:bg-neutral-100 focus:text-neutral-800 focus:outline-none active:no-underline dark:text-neutral-200 dark:hover:bg-neutral-600 dark:focus:bg-neutral-600 dark:active:bg-neutral-600">
                                                Sort By: 👇
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
                                </div>
                            </div>
                           <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                           {
                                posts.map((car, _id) => (
                                    <Post key={_id}  car={car}/>
                            ))}
                           </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery