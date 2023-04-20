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
            <h1 className='navbar-brand'>RSBuddy</h1>
            {(user == null) ? 
              <div /> : 
              <button onClick={() => {[logOut(setUser), setChangeState(true)]}}>Log Out</button>
            }
          </nav>
        </div>
        <div>
          { (user == null) ?
          <div className="container-fluid">
            <div className="row align-items-center" id="sULIBackground">
              <div className="col align-self-center">
              <SignUp />
              </div>
              <div className="col align-self-center">
              <LogIn />
              </div>
            </div>
            </div>
             : 
            <div>
              <HomePage />
            </div>
          }
        </div>
        </userContext.Provider>
      </>
    );
  }
