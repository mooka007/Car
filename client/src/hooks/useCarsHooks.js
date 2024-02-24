import { useState } from "react";
import { useAuthContext } from './useAuthContext'


export const usePosting = () => {
    
    const { dispatch } = useAuthContext()
    const fetchPosts = async () => {
        try {
        const response = await fetch('http://localhost:3001/cars', {
            headers: {
            'Content-Type': 'application/json'
            }
        });
    
        if (!response.ok) {
            // Handle non-OK response
            throw new Error('Response not OK');
        }
    
        const json = await response.json();
        dispatch({ type: 'SET_POSTS', payload: json });
        } catch (error) {
        // Handle fetch error
        console.error('Error occurred during fetch:', error);
        // Redirect to 404 page
        window.location.assign('/404');
        }
    }
    return { fetchPosts }
}



