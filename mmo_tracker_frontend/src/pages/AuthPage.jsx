import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


export default function AuthPage() {
    const [user, setUser] = useState("")
    const [submitStatus, setSubmitStatus] = useState(false)
    const [csrfToken, setCsrfToken] = useState(null)
    const navigate = useNavigate();
    const API_HOST ='http://localhost:3621'
    
    useEffect(() => {

    }, [user])

    useEffect(() => {
        if(submitStatus == true) {
            console.log(user)
            setSubmitStatus(false)
            navigate('/login', {replace: true});
        }
    }, [submitStatus])

    // async function getCsrfToken() {
    //     if (csrfToken === null) {
    //         const response = await fetch(`${API_HOST}/csrf`, {
    //             credentials: 'include',
    //         });
    //         const data = await response.json();
    //         setCsrfToken(data.csrfToken);
    //     }
    //     console.log(csrfToken);
    //     navigate('/login', {replace: true});
    //     window.location.reload(true);
    // }

    

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e)                      //DEBUG
        console.log(e.target['0'].value)    //DEBUG
        console.log(e.target['1'].value)    //DEBUG
        setUser(e.target['0'].value)
        setSubmitStatus(true)
    }


    return (
        <div className='d-flex'>
            <div className="col">
            <h1 className="row">Log in or Sign Up!</h1>
            <form method="post" action='login' onSubmit={handleSubmit}>
                <div className="row">
                    <input type="text" name="email" placeholder="email@domain.com" />
                </div>
                <div className="row">
                    <input type="text" name="user" placeholder="Username"/>
                </div>
                <div className="row">
                    <input type="password" name="pass" className="form-control" placeholder="Password"/>
                </div>
                <button type="submit" className="row">Log in</button>
            </form>
            </div>
        </div>
    );
}