import List from '../../components/list'
import EntryAnim from '../../components/page anim/entry'

export default function Women({items, currentCart, setCart}){

    return(
        <>
        <EntryAnim>
            <section id="Women" className="h-full mt-5 border-t-2 border-red-500">
                <h1 className="mt-5 mb-5 ml-5 md:ml-0">Women's Clothing</h1>
                <List items = {items} currentCart={currentCart} setCart = {setCart}/>
            </section>
        </EntryAnim>
           
        </>
    )
}