import {createBrowserRouter,RouterProvider} from 'react-router-dom'

import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import Error from './pages/util pages/Error.jsx'


export default function Router({setIsCart, isCart, 
                                currentCart, setCart, total,
                                menItems, womenItems}) {

    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home/>,
            errorElement: <Error/>
        },
        {
            path: "shop",
            element: <Shop setIsCart = {setIsCart} isCart={isCart} 
            currentCart={currentCart} setCart={setCart} total={total}
            menItems={ menItems } womenItems={ womenItems }/>,
        },

    ])


    return (
        <RouterProvider router={router}/>
    )
}