import React, {useEffect} from 'react';
import { Table } from 'flowbite-react';
import { useBookingContext } from '../hooks/useBooking'
import { useAuthContext } from '../hooks/useAuthContext'

const BookingList = () => {
    const { books, dispatch } = useBookingContext()
    const { user } = useAuthContext();

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const token = user && user.token ? user.token : '';
                // const token = user.token;
                // console.log('User Token:', token);
                const response = await fetch('http://localhost:3001/booking', {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                const json = await response.json();
                // console.log(json)
                if (response.ok) {
                    dispatch({ type: 'SET_BOOK', payload: json })
                }
            } catch (error) {
                // Handle fetch error
                console.error('Error occurred during fetch:', error);
            }
        };
        fetchBooks();
        // console.log(books)
        }, [dispatch, books, user]);

    // useEffect(() => {
    //     const fetchBooks = async () => {
    //         try {
    //             const token = user && user.token ? user.token : '';
                
    //             // If the token is not available, do not proceed with the fetch
    //             if (!token) {
    //                 return;
    //             }
    
    //             const response = await fetch('http://localhost:3001/booking', {
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${token}`
    //                 }
    //             });
    
    //             const json = await response.json();
                
    //             if (response.ok) {
    //                 dispatch({ type: 'SET_BOOK', payload: json });
    //             } else {
    //                 // If the response is not OK, you might want to handle it accordingly
    //                 console.error('Error occurred during fetch:', response.status, json);
    //             }
    //         } catch (error) {
    //             // Handle fetch error
    //             console.error('Error occurred during fetch:', error);
    //         }
    //     };
    
    //     fetchBooks();
    // }, [dispatch, user]);
    return (
        <div className="mt-60 mb-60 mx-60">
        <Table>
            <Table.Head>
                <Table.HeadCell>Car name</Table.HeadCell>
                <Table.HeadCell>Car Model</Table.HeadCell>
                <Table.HeadCell>The Book Date</Table.HeadCell>
                <Table.HeadCell>Start Date</Table.HeadCell>
                <Table.HeadCell>End Date</Table.HeadCell>
            </Table.Head>
            
            <Table.Body className="divide-y">
            {books.map((book, id) => (
                <Table.Row key={id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <Table.Cell>{book.car.name}</Table.Cell>
                <Table.Cell>{book.car.model}</Table.Cell>
                <Table.Cell>{book.startDate}</Table.Cell>
                <Table.Cell>{book.endDate}</Table.Cell>
                <Table.Cell>{book.createdAt}</Table.Cell>
                </Table.Row>
            ))}
            </Table.Body>
            
        </Table>
        </div>
    );
}


export default BookingList;