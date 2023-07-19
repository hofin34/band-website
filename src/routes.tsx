import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ConcertPage from "./features/concerts/components/ConcertPage";
import AboutPage from "./features/about/components/AboutPage";
import HomePage from "./features/home/components/HomePage";
import EshopPage from "./features/eshop/components/EshopPage";



const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { path: "", element: <HomePage /> },
        { path: "koncerty", element: <ConcertPage /> },
        { path: "o-nas", element: <AboutPage /> },
        { path: "eshop", element: <EshopPage /> }
    ]

}]);


export default router;