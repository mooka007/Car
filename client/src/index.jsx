import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { AuthContextProvider } from "./context/AuthContext";
import { PostContextProvider } from './context/CarsContext';
import { BookContextProvider } from './context/BookingContext';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <PostContextProvider>
        <BookContextProvider>
          <ToastContainer  theme="dark" position="top-right" autoClose={3000} closeOnClick pauseOnHover={false}/>
          <App />
        </BookContextProvider>
      </PostContextProvider>
    </AuthContextProvider>
  </React.StrictMode>
);


