import { useState, useEffect } from 'react'
import { Outlet } from 'react-router-dom'
import './App.css'
import { currUser, logOut } from './utilities';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';

export default function App() {
const [user, setUser] = useState(null);

  useEffect(() => {
    const getCurrUser = async () => {
      setUser((await currUser()).username)
      console.log(user)
    };

    getCurrUser()
  }, []);

    return (
      <>
        <div>
            <h1>Welcome to MMO Buddy! {user}</h1>
            <h3>Your companion for all things MMO</h3>
            <button onClick={logOut}>Log Out</button>
        </div>
        <div>
            <SignUp />
            <LogIn />
        </div>
      </>
    );
  }