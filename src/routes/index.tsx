import { createBrowserRouter } from "react-router";
import App from "../App";
import LandingPage from "../pages/landing-page/LandingPage";

export const router = createBrowserRouter([
    {
        path: '/',
        Component: () => <App />,
        errorElement: <div>404 Not Found</div>,
        children: [
            {
                index: true,
                Component: () => <LandingPage />,
            }
        ],
    }
]);