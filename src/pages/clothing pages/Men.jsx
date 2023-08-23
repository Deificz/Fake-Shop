import List from '../../components/list'


export default function Men({items, currentCart, setCart}){
    return(
        <>
            <section id="Men" className="h-full mt-5 border-t-2 border-red-500">
                <h1 className="mt-5 mb-5">Men's Clothing</h1>
                <List items = {items} currentCart={currentCart} setCart = {setCart}/>
            </section>
        </>
    )
}