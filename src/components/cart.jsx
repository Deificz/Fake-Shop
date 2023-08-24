import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react';

export default function Cart({isCart, setIsCart, currentCart, setCart, total, setCheckout, isCheckout}) {

    
    const handleClose = () => {
        setIsCart(false)
    }

    const increase = (item) => {
        setCart(prevCart => 
                      prevCart.map(product => 
                                    product.id === item.id 
                                    ? {...product, quantity: product.quantity+1} 
                                    : product))
    }

    const decrease = (item) => {
        setCart(prevCart => 
                      prevCart.map(product => product.id === item.id 
                        ? {...product, quantity: product.quantity - 1} 
                        : product))
    }

    const clearCart = () => {
        setCheckout(true);
        window.scrollTo(0, 0);
    }

    useEffect(() => {
        if(isCheckout === true){
            setTimeout(() => {
                setCheckout(false);
                setCart([]);
                setIsCart(false);
            }, 2000);
            
        }
            
        
    },[isCheckout])

    return(
        <>
            <div className={`h-[100vh] ${isCart ? 'w-[300px] border-l-2 border-red-500 rounded-tl-xl rounded-bl-xl' : '' } w-0  top-0 right-0 bg-slate-100  fixed flex flex-col pt-5 transition-all duration-200`}>
                <i className="fa-solid fa-xmark text-3xl text-right mr-3 cursor-pointer" onClick={handleClose}></i>
                <h1 className="text-3xl text-center mt-5">Cart</h1>
                <div className="overflow-scroll">
                    {
                        currentCart.map(item => 
                                item.quantity != 0 && 
                                    <div key={item.id} className="mt-10 mx-5 p-5 flex flex-col justify-center items-center border-t-2 border-black">
                                        <img src={item.image} alt="" className="h-[20vh] mb-5" />
                                        <h1 className="text-center">{item.title}</h1>
                                        <h1 className="text-center mt-5">Quantity: {item.quantity}<i className="fa-solid fa-plus ml-5 cursor-pointer" onClick={() => increase(item)}></i><i className="fa-solid fa-minus ml-2 cursor-pointer" onClick={() => decrease(item)}></i></h1>
                                        <h1 className="text-center mt-5">Price: $ <span className='text-green-600 font-bold'>{item.price*item.quantity}</span></h1>
                                    </div>
                        )
                    }
                   
                </div>
                <h1 className='mt-5 text-center'>Total: <span className='text-green-500 font-bold'>{Math.floor(total * 100)/100}</span></h1>
                
            
                <button onClick={clearCart} className="m-5 px-10 py-5 bg-red-400 rounded-xl text-white hover:bg-white hover:text-black transition-all duration-500 border-2 border-red-500 ">Checkout</button>
            </div>
        </>
    )
}