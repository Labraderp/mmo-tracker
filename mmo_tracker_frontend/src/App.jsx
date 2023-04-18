import { useState, useEffect, createContext } from 'react'
import './App.css'
import { currUser, logOut } from './utilities';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import HomePage from './pages/HomePage';

export const userContext = createContext(null)

export default function App() {
const [user, setUser] = useState(null);
const [changeState, setChangeState] = useState(false);

  useEffect(() => {
    const getCurrUser = async () => {
      setUser((await currUser()).username)
      console.log(user)
    };

    getCurrUser();
  }, [changeState]);

    return (
      <>
      <userContext.Provider value={{user, setUser}}>
        <div>
          <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <h1 className='navbar-brand'>MMO Buddy: Your companion for all things MMO</h1>
            {(user == null) ? 
              <div /> : 
              <button onClick={() => {[logOut(setUser), setChangeState(true)]}}>Log Out</button>
            }
          </nav>
        </div>
        <div>
          { (user == null) ? 
            <div>
              <SignUp />
              <LogIn />
            </div> : 
            <div>
              <HomePage />
            </div>
          }
        </div>
        </userContext.Provider>
      </>
    );
  }