import {Link} from 'react-router-dom'

export default function Error() {
    return(
        <>
            <div className='bg-slate-800 flex h-screen justify-center items-center'>
                <h1>OOPS Something went wrong</h1>
                <Link to="/">Go back</Link>
            </div>
        </>
    )
}