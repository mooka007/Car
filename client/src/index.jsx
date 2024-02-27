import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from './context/CarsContext';
import { BookContextProvider } from './context/BookingContext';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <BookContextProvider>
          <App />
        </BookContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


