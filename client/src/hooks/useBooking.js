import { BookContext  } from "../context/BookingContext";
import { useContext  } from "react";

export const useBookingContext = () => {
    const context = useContext(BookContext)

    if(!context){
        throw Error('Must be Used inside a authContextProvider')
    }

    return context
}