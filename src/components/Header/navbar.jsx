import {Link} from 'react-router-dom'

export default function Navbar({setIsCart, showCart, quantity}) {

    const handleOpen = () => {
        if(quantity>0)
            setIsCart(true);
    }

    return(
        <>
        <nav className='flex justify-between items-center sm_max:justify-self-end'>

            <div className='flex md:ml-10 sm_max:fixed sm_max:bottom-0 sm_max:rounded-t-3xl sm_max:right-0 sm_max:left-0 sm_max:w-full sm_max:py-2 sm_max:justify-center sm_max:items-center sm_max:bg-red-400 '>
                <div className='md:ml-10 mx-5 group'>
                    <Link to="/" className='text-xl'>Home</Link>
                    <div className='mt-1 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
                </div>                
                <div className='md:ml-10 mx-5 group'> 
                    <Link to="/shop" className='text-xl'>Shop</Link> 
                    <div className='mt-1 w-0 h-1 bg-white group-hover:w-full transition-all duration-300'></div>
                </div>
            </div>

            {showCart &&  
            <div>
                <h1 className='text-center font-bold'>{quantity}</h1>
                <i className="fa-solid fa-cart-shopping cursor-pointer text-3xl transform hover:scale-150 duration-500 " onClick={handleOpen}></i>
            </div>}
           
        </nav>
            
        </>
    )
}