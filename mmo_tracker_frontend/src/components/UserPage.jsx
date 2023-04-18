import { useState, useEffect } from "react"

export default function UserPage(props) {
    const [email, setEmail] = setState(props.email)
    const [username, setUsername] = setState(props.username)

    return (
        <h1>Welcome to the userpage of {username}</h1>
    )
}