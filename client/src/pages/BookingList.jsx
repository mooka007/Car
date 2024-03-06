import React, {useEffect} from 'react';
import { Table } from 'flowbite-react';
import { useBooking } from '../hooks/useBooking'
// import { useAuthContext } from '../hooks/useAuthContext'

 const BookingList = () => {
    const { books, dispatch } = useBooking()
    // const { user } = useAuthContext()

    useEffect(() => {
        const fetchBooks = async () => {
            try {
                const response = await fetch('http://localhost:3001/books/booking', {
                headers: {
                    'Content-Type': 'application/json'
                }
                });
        
                if (!response.ok) {
                // Handle non-OK response
                throw new Error('Response not OK');
                }
        
                const json = await response.json();
                dispatch({ type: 'SET_BOOK', payload: json });
                // const uniqueNamesSet = new Set(json.map(post => post.name));
                // setUniqueModelNames(Array.from(uniqueNamesSet));
            } catch (error) {
                // Handle fetch error
                console.error('Error occurred during fetch:', error);
                // Redirect to 404 page
                // window.location.assign('/404');
            }
            };
        
            fetchBooks();
        }, [dispatch, books]);
    return (
        <div className="mt-60 mb-60">
        <Table>
            <Table.Head>
                <Table.HeadCell>Car name</Table.HeadCell>
                <Table.HeadCell>The Book Date</Table.HeadCell>
                <Table.HeadCell>Start Date</Table.HeadCell>
                <Table.HeadCell>End Date</Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
                {
                    books && (
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell>{books.car}</Table.Cell>
                            <Table.Cell>{books.startDate}</Table.Cell>
                            <Table.Cell>{books.endDate}</Table.Cell>
                            <Table.Cell>{books.timestamps}</Table.Cell>
                        </Table.Row>
                    )
                }
            </Table.Body>
        </Table>
        </div>
    );
}


export default BookingList;