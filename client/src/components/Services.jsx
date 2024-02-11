import React, {useEffect} from "react";
import { Tooltip } from 'flowbite-react';


const Services = () => {
    useEffect(() => {
        const copy = document.querySelector('.logos-slide').cloneNode(true);
        document.querySelector('.logos').appendChild(copy);
      }, []);
    return (
        <div className="px-4 lg:px-14 py-16  bg-neutralSilver mx-auto logos">
            <h2 className="text-center text-4xl text-neutralDGrey font-semibold mb-2">Cars that we have</h2>
            <p className="text-center text-neutralDGrey mt-5">These trusted brands offer diverse vehicle options, competitive rates, and exceptional service to ensure a seamless rental experience for our customers</p>
            <div className="text-center my-8 logos-slide">
                {/* company logo */}
                <div className="my-8 flex  justify-between items-center  ">
                    <Tooltip content="Mercedes" placement="top">
                        <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/mercedes-benz.png" alt="mercedes-benz"/>
                    </Tooltip>
                    <Tooltip content="AUDI" placement="bottom">
                        <img className=" mx-20 " width="100" height="100" src="https://img.icons8.com/plasticine/100/audi.png" alt="audi"/>
                    </Tooltip>
                    <Tooltip content="HYUNDAI" placement="top">
                        <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/hyundai.png" alt="hyundai"/>
                    </Tooltip>
                    <Tooltip content="KIA" placement="bottom">
                        <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/kia.png" alt="kia"/>
                    </Tooltip>
                    <Tooltip content="volkswagen" placement="top">
                        <img className=" mx-20 " width="50" height="50" src="https://img.icons8.com/ios/50/volkswagen.png" alt="volkswagen"/>
                    </Tooltip>
                    <Tooltip content="BMW" placement="bottom">
                        <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/bmw--v1.png" alt="bmw--v1"/>
                    </Tooltip>
                    <Tooltip content="lexus" placement="top">
                        <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/lexus.png" alt="lexus"/>
                    </Tooltip>

                </div>
                
            </div>            
        </div>
    )
}

export default Services; 
// 27.08