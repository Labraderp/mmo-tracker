import axios from 'axios';
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken"

const appendAlert = (message, type) => {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')

    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
        `<div class="alert alert-${type} alert-dismissible fade show" role="alert">`,
        `   <div class="fade show">${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('')

    alertPlaceholder.append(wrapper)
}

export const signUp = async(username, email, password) => {
    
    let response = await axios.post('/signup', {
        'username': username,
        'email': email,
        'password': password
    })

    console.log(response.data)

    switch(response.data.signup) {
        case false:
            if(response.data.reason=='empty_field') {
                appendAlert('Fields cannot be empty!', 'danger')
                return response.data.success
            }

            appendAlert('User already registered, try logging in!', 'warning')
            return response.data.success

        case true:
            appendAlert('You have signed up! Try logging in now :)', 'success')
            return response.data.success
    }
}

export const logIn = async(email, password, setUser) => {
    let response = await axios.post('/login', {
        'email':email,
        'password':password
    })

    switch(response.data.login) {
        case false:
            if(response.data.reason=='no_email') {
                appendAlert('No email given!', 'danger')
                return response.data
            }

            if(response.data.reason=='no_password') {
                appendAlert('No password given!', 'danger')
                return response.data
            }

            if(response.data.reason == 'no_user') {
                appendAlert('User does not exist, try signing up!', 'warning')
                return response.data
            }
        case true:
            appendAlert(`${response.data.username} has logged in - Welcome!`, 'success')
            setUser(response.data.username)
            return response.data
    }    
}

export const currUser = async() => {
    let response = await axios.get('/curruser')
    // console.log(response.data)
    return response.data
}

export const logOut = async(setUser) => {
    let response = await axios.post('/logout')
    
    switch(response.data.logout) {
        case(true):
            appendAlert('Successfully logged out!', 'success')
            setUser(null)
            return response.data.logout
        case(false):
            appendAlert('There was an error logging out!', 'danger')
            return response.data.logout
    }
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

    switch(response.data.fave_beast) {
        case('deleted'):
            appendAlert(`${beast.label} was removed!`, 'warning')
            break
        case('saved'):
            appendAlert(`${beast.label} added to favorites!`, 'success')
            break
        case('failed'):
            appendAlert('There was an error...', 'danger')
            break
    }
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

    switch(response.data['fave_item']) {
        case('removed'):
            appendAlert(`${item.name} was removed!`, 'warning')
            break
        case('added'):
            appendAlert(`${item.name} added to favorites!`, 'success')
            break
        case('failure'):
            appendAlert('There was an error...', 'danger')
            break
    }
    console.log(response.data['fave_item'])
}

export const getFaveItems = async(userData, setItems) => {
    let response = await axios.post('/getFaveItems', {
        "user" : userData
    })
    console.log(response.data.item_list)
    setItems(response.data.item_list)
}

export const getTimers = async(userData, setTimerList) => {
    let response = await axios.post('/getTimers', {
        "user" : userData
    })
    if(response.data.timer_list == 'nothing_here') {
        return response.data.timer_list
    } else {
        setTimerList(response.data.timer_list)
    }
    
}

export const saveTimer = async(userData, timer) => {
    let response = await axios.post('/saveTimer', {
        "user" : userData,
        "timer" : timer
    })
    console.log(response.data)

    switch(response.data.saveTimer) {
        case('success'):
            appendAlert('Timer created successfully!', 'success')
            break
        case('alreadyExists'):
            appendAlert('Timer already exists!', 'warning')
            break
        case('failed'):
            appendAlert('There was an error!', 'danger')
    }
}

export const deleteTimer = async(userData, timer) => {
    let response = await axios.post('/deleteTimer', {
        "user" : userData,
        "timer" : timer
    })

    switch(response.data.timer_delete) {
        case('deleted'):
            appendAlert('Timer deleted!', 'success')
            break
        case('failure'):
            appendAlert('Timer already deleted!', 'failure')
            break
    }

    console.log(response.data)
}