import { useState, useEffect, createContext } from 'react'
import './App.css'
import { currUser, logOut, logIn, signUp } from './utilities'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import HomePage from './pages/HomePage'
import RSBuddy from './assets/rsbuddy.png'

export const userContext = createContext(null)

export default function App() {
const [user, setUser] = useState(null);
const [userData, setUserData] = useState(null)
const [changeState, setChangeState] = useState(false);

  useEffect(() => {
    const getCurrUser = async () => {
      setUser((await currUser()).username)
      setUserData(await currUser())
      console.log(user)
      console.log(userData)
    };

    getCurrUser();
  }, [changeState]);

    return (
      <>
      <div className="position-fixed bottom-0 end-0 p-3" id="liveAlertPlaceholder" />
      <userContext.Provider value={{user, setUser, userData}}>
        <div className='d-flex justify-content-between'>
            <img className='navbar-brand' src={RSBuddy} id="rsbuddyNav" />

            {(user == null) ? 
              <div /> : 
              <button className="btn btn-danger m-4" onClick={() => {[logOut(setUser), setChangeState(true)]}}>Log Out</button>
            }
        </div>
        <div>
          { (user == null) ?
          <div className="container-fluid">
            <div className="row align-items-center rounded p-2" id="general-bg">
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

