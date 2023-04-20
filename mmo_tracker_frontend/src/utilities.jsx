import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken"

export const signUp = async(username, email, password) => {
    let response = await axios.post('/signup', {
        'username': username,
        'email': email,
        'password': password
    })
    // console.log(response.data.success)
    return response.data.success
}

export const logIn = async(email, password, setUser) => {
    let response = await axios.post('/login', {
        'email':email,
        'password':password
    })
    if(response.data.login) {
        setUser(response.data.username)
    }
    // console.log(response.data)
    return response
}

export const currUser = async() => {
    let response = await axios.get('/curruser')
    // console.log(response.data)
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/logout')
    setUser(null)
    // console.log(response)
    return response.data.logout
}

export const itemSearchOSRS = async(itemName, setItems, setMaxPages, setMaxFlag, pageNum, maxFlag) => {
    
    let response = await axios.get(`/itemSearchOSRS/${itemName}/${pageNum}/${maxFlag}`)
    // console.log(response.data.item_search.items)
    setItems(response.data.item_search.items)
    
    if(maxFlag == 0) {
        setMaxPages(response.data.max_pages)
        setMaxFlag(1)
        // console.log(response.data.max_pages)
    }

    return response.data.item_search.items
}

export const bestiarySearchOSRS = async(beastName, setBeastList) => {

    let response = await axios.get(`/bestiarySearchOSRS/${beastName}`)
    // console.log(response.data.beast_search)
    return setBeastList(response.data.beast_search)
}

export const bestiaryResolve = async(beastID) => {
    let response = await axios.get(`/bestiaryResolveOSRS/${beastID}`)
    // console.log(response.data)
    return response.data.beast_resolve
}