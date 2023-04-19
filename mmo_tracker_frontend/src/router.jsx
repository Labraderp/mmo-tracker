import { createBrowserRouter, createHashRouter } from "react-router-dom";
import App from "./App";
import ErrorPage from "./pages/ErrorPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";


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
            }
        ]
    }
])

export default router;