// import { useState } from "react";
// import { useAuthContext } from './useAuthContext'


// export const usePosting = () => {
    
//     const { user, dispatch } = useAuthContext()
//     const fetchPosts = async () => {
//         try {
//         const response = await fetch('http://localhost:3001/cars', {
//             method: 'GET',
//             headers: {
//                 'Content-Type': 'application/json',
//                 'Authorization': `Bearer ${user.token}`,
//             }
//         });
    
//         if (!response.ok) {
//             // Handle non-OK response
//             throw new Error('Response not OK');
//         }
//         if (user) {
//             fetchPosts()
//         }
    
//         const json = await response.json();
//         dispatch({ type: 'SET_POSTS', payload: json });
//         console.log(json)
//         } catch (error) {
//         // Handle fetch error
//         console.error('Error occurred during fetch:', error);
//         // Redirect to 404 page
//         window.location.assign('/404');
//         }
//     }
//     return { fetchPosts }
// }



