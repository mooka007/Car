import React from "react";
import car1 from "../assets/cars/1.jpg"
import car2 from "../assets/cars/2.png"
import car3 from "../assets/cars/3.jpg"
import car4 from "../assets/cars/4.jpg"
import car5 from "../assets/cars/5.jpg"
import car6 from "../assets/cars/6.jpg"
import car7 from "../assets/cars/7.jpg"

const Services = () => {
    return (
        <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
            <div className="text-center my-8">
                <h2 className="text-4xl text-red-500 font-semibold mb-2">Our Client</h2>
                <p className="text-red-600">we have been working with some fortune 600+ client</p>
                {/* company logo */}
                <div>
                    <img src={car1} />
                    <img src={car2} />
                    <img src={car3} />
                    <img src={car4} />
                    <img src={car5} />
                    <img src={car6} />
                    <img src={car7} />

                </div>
            </div>            
        </div>
    )
}

export default Services; 
// 27.08