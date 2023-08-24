import Router from './Router.jsx'
import { useState,useEffect } from 'react';
function App() {

    const [menItems, setMenItems] = useState([]);
    const [womenItems, setWomenItems] = useState([]);
    const [error, setError] = useState(null);

    const [currentCart, setCart] = useState([]);

    const [isCart, setIsCart] = useState(false);

    const [total, setTotal] = useState(0);

    const [quantity, setQuantity] = useState(0);

    useEffect(() => {
          setTotal(0);
          currentCart.map(item => setTotal(prevTotal => prevTotal + (item.price * item.quantity)) )
      },[currentCart]);

    useEffect(() => {
        setQuantity(0);
        currentCart.map(item => setQuantity(prevQuantity => prevQuantity + item.quantity))
    },[currentCart]);

    console.log(quantity);
  //GET SAMPLE PRODUCTS
  useEffect(() => {
      const fetchClothes = async () => {
          try{

              const response = await fetch('https://fakestoreapi.com/products',{mode:'cors'});
              if(!response.ok){
                  throw new Error(`This is an HTTP error: Status-${response.status}`)
              }
              const raw_data = await response.json();

              //Filter the data for clothing only
              const menData = raw_data.filter(piece => {
                  if(piece.category == "men's clothing")
                      return piece.category
              });
              const womenData = raw_data.filter(piece => {
                  if(piece.category == "women's clothing")
                      return piece.category
              });

              setMenItems(menData);
              setWomenItems(womenData);
              
          }catch(__error){
              setError(__error);
              console.log(error);
          }
      }
      fetchClothes();
  },[]);
  return (
    <>
      <Router setIsCart = {setIsCart} isCart={isCart} 
              currentCart={currentCart} setCart={setCart} total={total}
              menItems={ menItems } womenItems={ womenItems } quantity={ quantity } />
    </>
  )
}

export default App
