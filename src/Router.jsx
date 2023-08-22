import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Checkout from './pages/Checkout.jsx'
import Error from './pages/util pages/Error.jsx'


export default function Router() {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <Error/>
        },
        {
            path: "/shop",
            element: <Shop/>
        },
        {
            path: "/checkout",
            element: <Checkout/>
        }
    ])


    return (
        <RouterProvider router={router}/>
    )
}