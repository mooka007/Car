import { useState } from "react";
import { useAuthContext } from './useAuthContext'


export const useLogin = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()

const login = async(email, password) => {
        setIsLoading(true)
        setError(null)
        const res = await fetch('http://localhost:3001/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password})
        })
        const json = await res.json()
        console.log(json)
        
        if(!res.ok){
            setIsLoading(false)
            setError(json.error) 
        }

        if(res.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
            window.location.assign('/');
            // update loading state
            setIsLoading(false)
        }
    }
    return { login, isLoading, error }
}


export const useRegister = () => {
    const [ error, setError ] = useState(null)
    const [ isLoading, setIsLoading] = useState(null)
    const { dispatch } = useAuthContext()
    
    const register = async (fullName, email, phone, password) => {
        setIsLoading(true)
        setError(null)
        const res = await fetch('http://localhost:3001/auth/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({fullName, email, phone, password})
        })
        const json = await res.json()

        if(!res.ok){
            setIsLoading(false)
            setError(json.error)
        }
        if(res.ok){
            // save user to localStorage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({ type: 'LOGIN', payload: json})

            setIsLoading(false)
            window.location.assign('/validate_email');
        }
    }
    return {  register, isLoading, error }
}


export const useLogout = () => {
    const { dispatch } = useAuthContext()

    const logout = () => {
        // remove user from storage
        localStorage.removeItem('user')

        // dispatch logout action
        dispatch({ type: 'LOGOUT'})
// 12
    }
    return { logout }
}