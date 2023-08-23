import { useEffect, useState } from "react"


export default function List({items, currentCart, setCart}) {

    const handleClick = (product) => {

        const bought_item = items.find(item => {
            if(product.id === item.id)
                return item
        })

        //Find if it is already in the cart
        const findItem = currentCart.find(cartItem => cartItem.id == bought_item.id)
        
        if(findItem){
            //Update the quantity
            setCart(prevCart => 
                    prevCart.map(item => 
                                item.id === bought_item.id
                                ? {...item, quantity: item.quantity + 1 }
                                : item) 
            )
        }
        else{
            //Create quantity property and insert the product
            const newProduct = {
                      ...bought_item,
                      quantity: 1
                    };
            setCart(prevCart => [...prevCart, newProduct]);
            
        }
    }
    
    return(
        <div className="grid grid-cols-[1fr_1fr_1fr] p-5 h-fit w-fit">
            {items.map((item) =>
                <div key={item.id} className="grid grid-rows-[1fr_3fr_2fr] text-center p-5 rounded-2xl w-72 ml-16 mb-16">
                    <h1 className="mb-10 text-center font-bold">{item.title}</h1>
                    <img className="w-full h-64 mb-10" src={item.image}></img>
                    <p className="mb-5 h-40 w-60 overflow-auto">{item.description}</p>
                    <p className="mb-5">⭐{item.rating.rate}</p>
                    <p className="mb-5">${item.price}</p>
                    <button onClick={() => {handleClick(item)}} className="px-10 py-5 bg-red-400 rounded-xl text-white hover:bg-white hover:text-black transition-all duration-500 border-2 border-red-500 ">Add to Cart</button>
                </div>
            )}
        </div>
    )
}