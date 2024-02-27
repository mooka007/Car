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
    const { fetchPosts} = usePosting();
    const { posts, dispatch } = usePostsContext();
    const [uniqueModelNames, setUniqueModelNames] = useState([]);
    const [selectedName, setSelectedName] = useState(null);

    useEffect(()=>{
        fetchPosts();
        const uniqueNames = [...new Set(posts.map((car) => car.name))];
        setUniqueModelNames(uniqueNames);
    },[dispatch, posts])

    // useEffect(() => {
        
    // }, [posts]);

    const handleNameClick = (name) => {
    setSelectedName(name);
    };

    const filteredPosts = selectedName ? posts.filter((car) => car.name === selectedName) : posts;
    return (
        <div className='text-center my-60  '>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 ">
                    <div className="lg:flex lg:-mx-2">
                        <div className="text-start space-x-3 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"></a>
                            {
                                uniqueModelNames.map((name, _id) => (
                                    <a key={_id}
                                    onClick={() => handleNameClick(name)}
                                    className={`block font-medium text-gray-500 dark:text-gray-300 hover:underline ${selectedName === name ? "text-blue-500" : ""}`}>{name}</a>
                            ))}
                        </div>
                        <div className="mt-6 lg:mt-0 lg:px-2 lg:w-4/5 ">
                            <div className="flex items-center justify-between text-sm tracking-widest uppercase ">
                                <p className="text-gray-500 dark:text-gray-300">{filteredPosts.length} Items</p>
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
                                    filteredPosts.map((car, _id) => (
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