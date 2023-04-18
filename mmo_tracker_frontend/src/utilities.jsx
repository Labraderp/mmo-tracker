import axios from 'axios';
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

export const logIn = async(email, password) => {
    let response = await axios.post('/login', {
        'email':email,
        'password':password
    })
    console.log(response)
    return response
}

export const currUser = async() => {
    let response = await axios.get('/curruser')
    console.log(response.data)
    return response.data
}

export const logOut = async() => {
    let response = await axios.post('/logout')
    console.log(response)
    return response.data.logout
}