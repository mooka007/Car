import React from 'react';

import { createContext, useReducer } from "react";

export const BookContext = createContext()

export const booksReducer = (state, action) => {
    switch (action.type) {
        case 'SET_BOOK':
            return { posts: action.payload }
        case 'CREATE_BOOK':
            return { posts: [action.payload, ...state.books] }
        case 'CREATE_BOOK':
            return { posts: state.books.filter((p) => p._id !== action.payload._id) }
        default:
            return state
    }
}

export const BookContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(booksReducer, {
        books: []
    })

    return (
        <BookContext.Provider value={{ ...state, dispatch }} >
            {children}
        </BookContext.Provider>
    )
}