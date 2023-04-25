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

export const saveBeast = async(beast, userData) => {
    let response = await axios.post('/favBeast', {
        "beast" : beast,
        "user" : userData
    })
    console.log(response)
}

export const getFaveBeasts = async(userData, setBeasts) => {
    let response = await axios.post('/getFaveBeasts', {
        "user" : userData
    })
    console.log(response.data.beast_list)
    return setBeasts(response.data.beast_list)
}

export const saveItem = async(item, userData) => {
    let response = await axios.post('/favItem', {
        "user" : userData,
        "item" : item
    })
    console.log(response.data)
}

export const getFaveItems = async(userData, setItems) => {
    let response = await axios.post('/getFaveItems', {
        "user" : userData
    })
    console.log(response.data.item_list)
    return setItems(response.data.item_list)
}