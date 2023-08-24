import ExitAnim from "./page anim/exit"

export default function Checkout ({total}) {

    return(
        <>
        {total > 0 ? 
            <ExitAnim>
            <div className="mt-10 absolute left-[50%] translate-x-[-50%] rounded-3xl bg-green-200 border-2 border-green-500 z-40 h-[30vh] w-[30vw] flex flex-col justify-center items-center">
                <h1 className="font-bold mb-5">Total is <span className="text-green-900">${Math.floor(total * 100)/100}</span></h1>
                <h2 className="font-bold">Thank you for Shopping!</h2>
            </div>
            </ExitAnim> :

            <ExitAnim>
            <div className="mt-10 absolute left-[50%] translate-x-[-50%] rounded-3xl bg-red-200 border-2 border-red-500 z-40 h-[30vh] w-[30vw] flex flex-col justify-center items-center">
                <h1 className="font-bold mb-5">Cart is Empty!</h1>
            </div>
            </ExitAnim>
        }
        </>
        
    )
}