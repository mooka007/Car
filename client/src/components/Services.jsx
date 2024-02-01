import React from "react";
import car1 from "../assets/cars/1.ico"
import car2 from "../assets/cars/2.ico"
import car3 from "../assets/cars/3.ico"
import car4 from "../assets/cars/4.ico"
import car5 from "../assets/cars/5.ico"
import car6 from "../assets/cars/6.ico"
import car7 from "../assets/cars/7.ico"

const Services = () => {
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-red-500 font-semibold mb-2">Our Client</h2>
                <p className="text-red-600">we have been working with some fortune 600+ client</p>
                {/* company logo */}
                <div>
                    <img alt="" src={car1} />
                    <img alt="" src={car2} />
                    <img alt="" src={car3} />
                    <img alt="" src={car4} />
                    <img alt="" src={car5} />
                    <img alt="" src={car6} />
                    <img alt="" src={car7} />

                </div>
            </div>            
        </div>
    )
}

export default Services; 
// 27.08