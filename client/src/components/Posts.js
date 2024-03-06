import React, { useEffect, useState } from "react";
import { Button, Modal } from 'flowbite-react';
import Datepicker from './Datepicker';
import { motion } from "framer-motion"
import { differenceInDays } from 'date-fns';
import { useBook } from "../hooks/useBookingHooks";

export const Post = ({ car, _id }) => {
    const { book, isLoading, error } = useBook();
    const today = new Date();
    const [openModal, setOpenModal] = useState(false);
    const [startDate, setStartDate] = useState(today);
    const [endDate, setEndDate] = useState(today);
    const [totalCost, setTotalCost] = useState(0);
    const [selectedCar, setSelectedCar] = useState('');

    const handleStartDateChange = (date) => {
        setStartDate(date);
    };
    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleselectedCar = () => {
        setSelectedCar(car.name);
    };

    const calculateTotalCost = () => {
        const pricePerDay = 75;
        const days = differenceInDays(endDate, startDate) + 1;
        return days * pricePerDay;
    };

    const handleSubmit = async () => {      
        setSelectedCar(car.name);

        // Perform the submission logic with the total cost
        const calculatedTotalCost = calculateTotalCost();
        setTotalCost(calculatedTotalCost);

        await  book(selectedCar, startDate, endDate )
        console.log("Submitting Total Cost:", calculatedTotalCost);

        // Close the modal after submission
        setOpenModal(false);
    };

    useEffect(() => {
        
        // Update the total cost whenever start or end date changes
        const calculatedTotalCost = calculateTotalCost();
        setTotalCost(calculatedTotalCost);
    }, [startDate, endDate]);

    const imageSize = {
        width: '100%',
        height: 'auto',
    };
    return (
        <>
            <div key={_id}  className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
                <img className="object-cover w-full rounded-md h-72 xl:h-80" src={car.image} alt={car.name} />
                <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{car.name}</h4>
                <p className="text-blue-500">{car.model}</p>

                <motion.button
                    whileHover={{ scale: 0.9 }}
                    className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
                    </svg>
                    <a onClick={() => {
                        handleselectedCar();
                        setOpenModal(true);
                        }}>Book
                    </a>                
                </motion.button>
            </div>
            {/* Modal for booking */}
            <Modal className="mt-16" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className=" mx-auto">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 px-4">
                                <div>
                                    <img src={car.image} alt={car.name} style={imageSize} />
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 px-4">
                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400 mt-6">
                                    {car.description} 
                                </p>
                                <div className="mt-10">
                                    <Datepicker title="Start Date" onChange={handleStartDateChange} selected={startDate} value={startDate} />
                                    <Datepicker title="End Date" onChange={handleEndDateChange} selected={endDate} value={endDate} />
                                    <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                        Total Cost: ${totalCost}
                                    </p>
                                </div>

                            </div>
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}


