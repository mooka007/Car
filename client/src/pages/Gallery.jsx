import React from "react";
import Cards from "../components/Cards";
import { Dropdown } from 'flowbite-react';


const Gallery = () => {
    return (
        <div className='text-center my-60  '>
            <h2 className='text-5xl'>what we offer</h2>
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
            <div className="flex  flex-wrap items-center justify-between mx-24 mt-16 md:">
            <Cards />

            
            </div>
        
        </div>
    )
}

export default Gallery