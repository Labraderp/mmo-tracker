import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "./App";
import AuthPage from "./pages/AuthPage";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import UserPage from "./components/UserPage";


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
            },
            {
                path: "user/:name",
                element: <UserPage user/>
            }
        ]
    }
])

export default router;