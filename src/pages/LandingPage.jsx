import { useState, useEffect } from "react"
import { signUp, logIn, currUser } from "../utilities"


export default function LandingPage() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        console.log(username, email, password)
    }, [username, email, password])

    return (
        <>
        <div>

        <form onSubmit={(e) =>[e.preventDefault(), signUp(username, email, password)]}>
            <h1>Sign Up</h1>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
        </div>
        <form onSubmit={(e) => [e.preventDefault(), logIn(email, password), setEmail(""), setPassword("")]}>
            <h3>Log In</h3>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input placeholer="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Log In</button>
        </form>
        </>
    )
}