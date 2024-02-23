import React, { useEffect, useState } from "react";
import { Dropdown } from 'flowbite-react';
import { usePostsContext } from '../hooks/useCars';
import { useAuthContext } from '../hooks/useAuthContext';
import Cards from './Cards'

const Offers = () => {
  const { posts, dispatch } = usePostsContext();
  const [uniqueModelNames, setUniqueModelNames] = useState([]);

  // const { user } = useAuthContext();

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch('http://localhost:3001/cars',
      {headers: {
        'Content-Type': 'application/json'}}
      )
      const json = await response.json()
      if (response.ok) {
        dispatch({ type: 'SET_POSTS', payload: json })
        const uniqueNamesSet = new Set(json.map(post => post.name));
        setUniqueModelNames(Array.from(uniqueNamesSet));
      }
    }
    // if (user ) {
      fetchPosts()
    // }
    // fetchPosts()
  }, [dispatch, posts])


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
          <Cards />
        </div>
    </div>
    


    </>
  );
}

export default Offers;