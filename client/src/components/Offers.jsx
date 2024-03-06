import React, { useEffect, useState } from "react";
import { Dropdown } from 'flowbite-react';
import { usePostsContext } from '../hooks/useCars';
// import { useAuthContext } from '../hooks/useAuthContext';
import Cards from './Cards'
import Carousel from 'react-multi-carousel';

const Offers = () => {
  const { posts, dispatch } = usePostsContext();
  const [uniqueModelNames, setUniqueModelNames] = useState([]);
  const responsive = {
    superLargeDesktop: 
    {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('http://localhost:3001/cars', {
          headers: {
            'Content-Type': 'application/json',
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
      } catch (error) {
        // Handle fetch error
        console.error('Error occurred during fetch:', error);
        // Redirect to 404 page
        window.location.assign('/404');
      }
    };
  
    fetchPosts();
  }, [dispatch, posts]);


  return (
    <>
    <div className='text-center h-[48rem] mt-14 '>
        <p className='text-6xl font-semibold'>Explore Our Cars</p>
        <div className="mt-10 w-40 mx-auto">
          <Dropdown  label="Model Cars">
          {uniqueModelNames.map((modelName, index) => (
              <Dropdown.Item key={index}>{modelName}</Dropdown.Item>
            ))}
          </Dropdown>
        </div>

        <div className="lg:mx-40 mt-10">
        <Carousel responsive={responsive} className='mx-10 ' >
        {
          posts.map((car, _id) => (
              <Cards key={_id}  car={car}/>
        ))}
        </Carousel>
        </div>
    </div>
    </>
  );
}

export default Offers;