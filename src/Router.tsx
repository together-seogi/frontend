import { createBrowserRouter } from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
import NotFoundPage from "./pages/NotFoundPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <MainPage />
            },
        ],
        errorElement: <NotFoundPage />
    }
]);

export default Router;