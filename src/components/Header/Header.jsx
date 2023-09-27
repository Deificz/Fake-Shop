import Navbar from "./navbar";
import img_logo from "../../assets/Images/logo.png"

export default function Header({setIsCart, showCart, quantity}) {


    return(
        <>  
            <section id='header' className="sticky top-0 grid grid-cols-[1.5fr_1fr] md:grid-cols-[.6fr_1fr] p-3 pr-10 bg-red-400 text-white shadow-xl shadow-white/30">
                <div className="flex items-center justify-center">
                    <img src={img_logo} alt="" className="h-16" />
                    <h1 className="font-bold text-md md:text-2xl">Clothing Store <span className="text-sm font-semibold md:text-xl">by Deificz</span></h1>
                </div>
                <Navbar setIsCart = {setIsCart} showCart = {showCart} quantity = { quantity }/>
            </section>
        </>
    )
}