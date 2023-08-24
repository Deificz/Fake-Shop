
import Header from "../components/Header/Header"
import {useTypewriter, Cursor} from 'react-simple-typewriter'

export default function Home(){
    const [text] = useTypewriter({
        words:['style', 'fashion' , 'idea'],
        loop:{},
        typeSpeed: 120,
        deleteSpeed: 80,
    });

   

    return(
        <>
        
            <Header showCart={false}/>
            <section id="home" className="flex justify-center items-center h-[100vh] bg-custom bg-cover" >
                <div className="bg-black bg-opacity-80 w-full h-60 flex items-center">
                    <h1 className="text-6xl text-white m-28">Be. your. own. <span className="text-red-400">{text}</span><Cursor/></h1>
                </div>
            </section>
        
            
        </>
    )
}