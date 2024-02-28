import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({ title, value, onChange }) => {
    // console.log(value); // Add this line to check the selected date

return (
<div className="mb-4">
    <label className="block text-sm font-medium text-gray-700">{title}</label>
    <DatePicker
    selected={value}
    onChange={onChange}
    dateFormat="MMMM d, yyyy"
    className="mt-1 p-2 border text-black border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
</div>
);
};

export default Datepicker;
