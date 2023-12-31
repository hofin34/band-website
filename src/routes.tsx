import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import ConcertPage from "./features/concerts/components/ConcertPage";
import AboutPage from "./features/about/components/AboutPage";
import HomePage from "./features/home/components/HomePage";
import EshopPage from "./features/eshop/components/EshopPage";
import OrderFinishLayout from "./features/order-finish/components/OrderFinishLayout";
import Recapitulation from "./features/order-finish/components/Recapitulation";
import ShippingInfo from "./features/order-finish/components/ShippingInfo";
import Payment from "./features/order-finish/components/Payment";
import FinishCongratulation from "./features/order-finish/components/FinishCongratulation";
import ErrorPage from "./components/ErrorPage";
import ProductDetail from "./features/eshop/components/ProductDetail";



const router = createBrowserRouter([{
    path: '/', element: <Layout />, children: [
        { path: "", element: <HomePage /> },
        { path: "koncerty", element: <ConcertPage /> },
        { path: "o-nas", element: <AboutPage /> },
        {
            path: "eshop", children: [
                { index: true, element: <EshopPage /> },
                { path: "produkt/:id", element: < ProductDetail /> }
            ]
        },
        { path: "gratulace", element: <FinishCongratulation /> },
        {
            path: "rekapitulace", element: <OrderFinishLayout />, children: [
                { path: "", element: <Recapitulation /> },
                { path: "doprava", element: <ShippingInfo /> },
                { path: "platba", element: <Payment /> },

            ]
        },
        { path: "*", element: <ErrorPage /> }
    ]
}
]);


export default router;