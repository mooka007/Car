import React from 'react';

import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext()


export const authReducer = (state, action) => {
    switch(action.type) {
        case 'LOGIN':
            //  the term "payload" refers to the data or information that is being sent along with an action
            return { user : action.payload }
        case 'LOGOUT': 
            return { user: null }
        default:
            return state
    }
}


// reducer is responsible for managing and updating based on the dispatched actions.
export const AuthContextProvider = ({ children }) => {
    const [ state, dispatch ] = useReducer(authReducer, {
        user: null
    })
    // when a component mounts it will check if there's already a user in local storage. If so, set the user object in
    useEffect(() => {
        const user  = JSON.parse(localStorage.getItem('user'))
        if(user){
            dispatch({ type: 'LOGIN', payload: user})
        }
    }, [])
    // for the test 
    // console.log('AuthContext state:', state)
    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            { children }
        </AuthContext.Provider>
    )
}