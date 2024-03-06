import React, {useEffect, useState} from "react";
import { usePostsContext } from '../hooks/useCars';

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
    const [uniqueModelNames, setUniqueModelNames] = useState([]);
    const [ all, setAll ] = useState()
    const [selectedName, setSelectedName] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
            const response = await fetch('http://localhost:3001/cars', {
                headers: {
                'Content-Type': 'application/json'
                }
            });
        
            if (!response.ok) {
                // Handle non-OK response
                throw new Error('Response not OK');
            }
        
            const json = await response.json();
            dispatch({ type: 'SET_POSTS', payload: json });
            const uniqueNamesSet = new Set(json.map(post => post.name));
            setUniqueModelNames(Array.from(uniqueNamesSet));
            const allNames = new Set(json.map(post => post.name));
            setAll(Array.from(allNames));
            } catch (error) {
            console.error('Error occurred during fetch:', error);
            // window.location.assign('/404');
            }
        };
        
        fetchPosts();
        }, [dispatch, posts]);

    const handleNameClick = (name) => {
    setSelectedName(name === "all" ? null : name);
    };

    const filteredPosts = selectedName ? posts.filter((car) => car.name === selectedName) : posts;
    return (
        <div className='text-center my-40  mr-28'>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-8 ">
                    <div className="lg:flex lg:-mx-2">
                        <div className="text-start space-x-3 space-y-3 lg:w-1/5 lg:px-2 lg:space-y-4">
                            <a href="#" className="block font-medium text-gray-500 dark:text-gray-300 hover:underline"></a>
                            <a
                                
                                onClick={() => handleNameClick("all")}
                                className={`block font-medium text-gray-500 dark:text-gray-300 hover:underline ${selectedName === null ? "text-blue-500" : ""}`}
                            >
                                all The Cars
                            </a>
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
                                filteredPosts ? (
                                    filteredPosts.map((car, _id) => (
                                        <Post key={_id}  car={car}/>
                                ))) : (<h1 className="text-center fs-4">no Cars are available!</h1> ) 
                                
                            }
                            </div>
                            
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Gallery