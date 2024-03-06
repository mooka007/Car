import { useState } from "react";
import { useBookingContext } from './useBooking'
import {useAuthContext  } from './useAuthContext'

export const useBook = () => {
    const { user } = useAuthContext();
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)
    const { dispatch } = useBookingContext()

    const book = async(selectedCar, startDate, endDate) => {
            setIsLoading(true)
            setError(null)
            const res = await fetch('http://localhost:3001/booking/gallery', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${user.token}`
                },
                body: JSON.stringify({ selectedCar, startDate, endDate})
            })
            const json = await res.json()
            // console.log(json)
            
            if(!res.ok){
                setIsLoading(false)
                setError(json.error) 
            }

            if(res.ok){
                // save the user to local storage
                // localStorage.setItem('book', JSON.stringify(json))

                // update the auth context
                dispatch({type: 'CREATE_BOOK', payload: json})
                // window.location.assign('/');
                // update loading state
                // setIsLoading(false)
            }
        }
        return { book, isLoading, error }
}