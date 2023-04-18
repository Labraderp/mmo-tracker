import { useState, useEffect } from "react"
import { signUp } from "../utilities"

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
<<<<<<< HEAD
        <form onSubmit={(e) =>[e.preventDefault(), signUp(username, email, password), setUsername(""), setEmail(""), setPassword("")]}>
=======
        <form onSubmit={(e) =>[e.preventDefault(), signUp(username, email, password)]}>
>>>>>>> main
            <h1>Sign Up</h1>
            <input placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="username" value={username} onChange={(e) => setUsername(e.target.value)}/>
            <input placeholder="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    )
    
}
