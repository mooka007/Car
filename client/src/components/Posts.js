// import React, { useEffect, useState } from "react";
// import { Button, Modal } from 'flowbite-react';
// import Datepicker from './Datepicker';
// import { motion } from "framer-motion"
// import { differenceInDays } from 'date-fns';
// import { useBook } from "../hooks/useBookingHooks";

// export const Post = ({ car, _id }) => {
//     const { book, isLoading, error } = useBook();
//     const today = new Date();
//     const [openModal, setOpenModal] = useState(false);
//     const [startDate, setStartDate] = useState(today);
//     const [endDate, setEndDate] = useState(today);
//     const [totalCost, setTotalCost] = useState(0);
//     const [selectedCar, setSelectedCar] = useState('')
//     const handleStartDateChange = (date) => {
//         setStartDate(date);
//     };
//     const handleselectedCar = () => {
//         setSelectedCar(car.name);
//     };
//     const handleEndDateChange = (date) => {
//         setEndDate(date);
//     };

//     const handleSubmit = () => {
//         // Perform the submission logic with the total cost
//         book(selectedCar, startDate, endDate )
//         console.log("Submitting Total Cost:", totalCost);
//         // Close the modal after submission
//         setOpenModal(false);
//     };

//     useEffect(() => {
//         const pricePerDay = 10;
//         if (startDate && endDate) {
//             const days = differenceInDays(endDate, startDate) + 1;
//             // console.log(days)
//             const calculatedTotalCost = days * pricePerDay;
//             setTotalCost(calculatedTotalCost);
//         } else if(!startDate && !endDate) {
//             throw Error("please select the start date and  end date");
//         }else {
//             setTotalCost(0);
//         }
//     }, [startDate, endDate]);

//     return (
//         <div>
//             <div className="flex flex-col items-center justify-center w-full max-w-lg mx-auto">
//                 <img className="object-cover w-full rounded-md h-72 xl:h-80" src={car.image} alt="Car" />
//                 <h4 className="mt-2 text-lg font-medium text-gray-700 dark:text-gray-200">{car.name}</h4>
//                 <p className="text-blue-500">{car.model}</p>

//                 <motion.button
//                     whileHover={{ scale: 0.9 }}
//                     className="flex items-center justify-center w-full px-2 py-2 mt-4 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-gray-800 rounded-md hover:bg-gray-700 focus:outline-none focus:bg-gray-700"
//                 >
//                     <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-1" viewBox="0 0 20 20" fill="currentColor">
//                         <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
//                     </svg>
//                     <a onClick={() => {
//                         handleselectedCar();
//                         setOpenModal(true);
//                         }}>Book
//                     </a>                
//                 </motion.button>

//                 <Modal className="mt-16" show={openModal} onClose={() => setOpenModal(false)}>
//                     <Modal.Body>
//                         <div className="space-y-6">
//                             <img src={car.image} />
//                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                                 {car.description} 
//                             </p>

//                             <div>
//                                 <Datepicker title="Start Date" onChange={handleStartDateChange} selected={startDate} />
//                                 <Datepicker title="End Date" onChange={handleEndDateChange} selected={endDate} />
//                             </div>

//                             <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
//                                 Total Cost: {totalCost}
//                             </p>
//                         </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button onClick={handleSubmit}>Submit</Button>
//                         <Button color="gray" onClick={() => setOpenModal(false)}>
//                             Cancel
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             </div>
//         </div>
//     )
// }


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

    const handleselectedCar = () => {
        setSelectedCar(car.name);
    };

    const handleEndDateChange = (date) => {
        setEndDate(date);
    };

    const handleSubmit = async () => {      
        setSelectedCar(car.name);
        console.log(selectedCar)

        // Perform the submission logic with the total cost
        const pricePerDay = 10;
        const days = differenceInDays(endDate, startDate) + 1;
        const calculatedTotalCost = days * pricePerDay;
        setTotalCost(calculatedTotalCost);

        await  book(selectedCar, startDate, endDate )
        console.log("Submitting Total Cost:", calculatedTotalCost);
        // Close the modal after submission
        setOpenModal(false);
    };

    useEffect(() => {
        if (!startDate || !endDate) {
            throw Error("Please select the start date and end date");
        }
    }, [totalCost]);

    return (
        <div >
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
            
            <Modal className="mt-16" show={openModal} onClose={() => setOpenModal(false)}>
                <Modal.Body>
                    <div className="space-y-6">
                        <img src={car.image} alt={car.name} />
                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            {car.description} 
                        </p>

                        <div>
                            <Datepicker title="Start Date" onChange={handleStartDateChange} selected={startDate} />
                            <Datepicker title="End Date" onChange={handleEndDateChange} selected={endDate} />
                        </div>

                        <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                            Total Cost: {totalCost}
                        </p>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleSubmit}>Submit</Button>
                    <Button color="gray" onClick={() => setOpenModal(false)}>
                        Cancel
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </div>
    )
}


