import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";
import ProfilePage from "./pages/ProfilePage.tsx";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
            {
                path: "profile/",
                element: <ProfilePage />
            },
        ],
        // errorElement: <NotFoundPage />
    }
]);

export default Router;
