import axios from 'axios';
<<<<<<< HEAD
import { useContext } from 'react';
import { userContext } from './App';
=======
>>>>>>> main
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken"

export const signUp = async(username, email, password) => {
    let response = await axios.post('/signup', {
        'username': username,
        'email': email,
        'password': password
    })
    console.log(response.data.success)
    return response.data.success
}

<<<<<<< HEAD
export const logIn = async(email, password, setUser) => {
=======
export const logIn = async(email, password) => {
>>>>>>> main
    let response = await axios.post('/login', {
        'email':email,
        'password':password
    })
<<<<<<< HEAD
    if(response.data.login) {
        setUser(response.data.username)
    }
    console.log(response.data)
=======
    console.log(response)
>>>>>>> main
    return response
}

export const currUser = async() => {
    let response = await axios.get('/curruser')
    console.log(response.data)
    return response.data
}

<<<<<<< HEAD
export const logOut = async(setUser) => {
    let response = await axios.post('/logout')
    setUser(null)
    console.log(response)
    return response.data.logout
}

export const itemSearchOSRS = async(itemName, setItems) => {
    let response = await axios.get(`/itemSearchOSRS/${itemName}`)
    console.log(response.data.item_search.items)
    setItems(response.data.item_search.items)
    return response.data.item_search.items
=======
export const logOut = async() => {
    let response = await axios.post('/logout')
    console.log(response)
    return response.data.logout
>>>>>>> main
}