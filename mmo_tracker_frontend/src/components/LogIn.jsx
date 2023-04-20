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
        <div className="col">
            <form onSubmit={(e) => [e.preventDefault(), logIn(email, password, setUser), setEmail(""), setPassword("")]} >
                <h3>Log In</h3>
                <p id="logInText">Existing users can log in below!</p>
                <div className="form-floating">
                    <input type="email"    className="form-control" id="floatingEmail" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label for="floatingEmail">Email</label>
                </div>

                <div className="form-floating">
                    <input type='password' className="form-control" id="floatingPass" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingPass">Password</label>
                </div>

                <button className="btn btn-outline-primary" type="submit">Log In</button>
            </form>
        </div>
    )
}