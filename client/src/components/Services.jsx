import React from "react";

const Services = () => {
    return (
        <div className="px-4 lg:px-14 py-16  bg-neutralSilver mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-neutralDGrey font-semibold mb-2">Trusted Car Providers</h2>
                <p className="text-neutralDGrey mt-5">These trusted brands offer diverse vehicle options, competitive rates, and exceptional service to ensure a seamless rental experience for our customers</p>
                {/* company logo */}
                <div className="my-8 flex flex-wrap justify-between items-center ">
                 <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/mercedes-benz.png" alt="mercedes-benz"/>
                 <img className=" mx-20 " width="100" height="100" src="https://img.icons8.com/plasticine/100/audi.png" alt="audi"/>
                 <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/hyundai.png" alt="hyundai"/>
                 <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/kia.png" alt="kia"/>
                 <img className=" mx-20 " width="50" height="50" src="https://img.icons8.com/ios/50/volkswagen.png" alt="volkswagen"/>
                 <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/bmw--v1.png" alt="bmw--v1"/>
                 <img className=" mx-20 " width="56" height="48" src="https://img.icons8.com/color/48/lexus.png" alt="lexus"/>

                </div>
            </div>            
        </div>
    )
}

export default Services; 
// 27.08