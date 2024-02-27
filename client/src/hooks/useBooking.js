import { BookContext  } from "../context/BookingContext";
import { useContext  } from "react";

export const useBooking = () => {
    const context = useContext(BookContext)

    if(!context){
        throw Error('Must be Used inside a authContextProvider')
    }

    return context
}