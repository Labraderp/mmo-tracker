import { useState, useEffect } from "react"
import { signUp } from "../utilities"

export default function SignUp() {

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <div className="col"> 
            <form onSubmit={(e) =>[e.preventDefault(), signUp(username, email, password), setUsername(""), setEmail(""), setPassword("")]}>
                <h3>Sign Up</h3>
                <p id="signUpText">Create an account to access RSBuddy</p>
                <div className="form-floating p-2">
                    <input type="email"    className="form-control" id="floatingEmail" value={email}    onChange={(e) => setEmail(e.target.value)}/>
                    <label for="floatingEmail">Email Address</label>
                </div>

                <div className="form-floating p-2">
                    <input                 className="form-control"  id="floatingUser" value={username} onChange={(e) => setUsername(e.target.value)}/>
                    <label for="floatingUser">Username</label>
                </div>

                <div className="form-floating p-2">
                    <input type="password" className="form-control"  id="floatingPass" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label for="floatingPass">Password</label>
                </div>

                <button className="btn btn-primary p-2" type="submit">Submit</button>
            </form>
        </div>
    )
    
}
