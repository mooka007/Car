import React from "react";
import { Dropdown } from 'flowbite-react';
import Cards from './Cards'

const Offers = () => {
  
  return (
    <>
    <div className='text-center h-[48rem] mt-14 '>
        <p className='text-6xl font-semibold'>Explore Our Cars</p>
        <div className="mt-20 w-40 mx-auto">
          <Dropdown  label="Model Cars">
            <Dropdown.Item>Mercedes</Dropdown.Item>
            <Dropdown.Item>Toyota</Dropdown.Item>
            <Dropdown.Item>Audi</Dropdown.Item>
            {/* <Dropdown.Divider />
            <Dropdown.Item>Separated link</Dropdown.Item> */}
          </Dropdown>
        </div>

        <div className="mx-24 mt-16 ">
          <Cards />
        </div>
    </div>
    


    </>
  );
}

export default Offers;