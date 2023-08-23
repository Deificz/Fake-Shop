import Navbar from "./navbar";
import img_logo from "../../assets/Images/logo.png"

export default function Header({setIsCart, showCart}) {


    return(
        <>  
            <section id='header' className="grid grid-cols-[.5fr_1fr] p-3 pr-10 bg-red-400 text-white shadow-xl shadow-gray-400/40">
                <div className="flex justify-center items-center">
                    <img src={img_logo} alt="" className="h-16" />
                    <h1 className="text-2xl font-bold">Clothing Store <span className="text-xl font-semibold">by Deificz</span></h1>
                </div>
                <Navbar setIsCart = {setIsCart} showCart = {showCart} />
            </section>
        </>
    )
}