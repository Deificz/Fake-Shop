import Header from "../components/Header";
import Men from './clothing pages/Men.jsx';
import Women from './clothing pages/Women.jsx';
import { useState } from "react";

export default function Shop(){

    const [isMen, setIsMen] = useState(true);

    const handleMen = () =>{
        setIsMen(true);
    }

    const handleWomen = () =>{
        setIsMen(false);
    }
    

    return(
        <>
            <Header/>
            <section id="shop" className="p-16 h-[100vh]">
                <div className="flex">
                    <h1 className={`cursor-pointer ${isMen ? "underline underline-offset-8" : ""}`} onClick={handleMen}>Men</h1>
                
                    <h1 className="ml-4">/</h1>

                    <h1 className={`cursor-pointer ${!isMen ? "underline underline-offset-8" : ""} ml-4`} onClick={handleWomen} >Women</h1>
                </div>
                {isMen ? <Men/> : <Women/>}
            </section>
        </>
    )
}