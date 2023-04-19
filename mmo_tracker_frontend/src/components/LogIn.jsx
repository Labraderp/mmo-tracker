import { useContext, useEffect, useState } from "react"
import { logIn } from "../utilities";
import { userContext } from "../App";

export default function LogIn() {

    const { setUser } = useContext(userContext)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    useEffect(()=> {
        console.log(email, password)
    }, [email, password])
    
    return(
        <form onSubmit={(e) => [e.preventDefault(), logIn(email, password, setUser), setEmail(""), setPassword("")]} >
            <h3>Log In</h3>
            <input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input placeholder="Password" type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input type="submit" value='Log In' />
        </form>
    )
}