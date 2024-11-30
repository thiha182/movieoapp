import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import ExplorePages from "../Pages/ExplorePages";
import DetailsPages from "../Pages/DetailsPages";
import SearchPages from "../Pages/SearchPages";


const router = createBrowserRouter ([
    {
        path : "/",
        element: <App/>,
        children: [
            {
                path: "",
                element: <Home/>
            },
            {
                path: ":explore",
                element: <ExplorePages/>
                
            },
            {
                path: ":explore/:id",
                element: <DetailsPages/>
            },
            {
                path: "search",
                element: <SearchPages/>
            }
        ]
    }
])

export default router;