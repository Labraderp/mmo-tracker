import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "./App";
<<<<<<< HEAD
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
=======
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserPage from "./components/UserPage";
>>>>>>> main


const router = createHashRouter ([
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            {   
                index: true,
                element: <LandingPage />
            }, 
            {
                path: "login",
                element: <HomePage />
<<<<<<< HEAD
=======
            },
            {
                path: "user/:name",
                element: <UserPage user/>
>>>>>>> main
            }
        ]
    }
])

export default router;