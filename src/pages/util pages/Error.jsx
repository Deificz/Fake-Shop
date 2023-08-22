import {Link} from 'react-router-dom'

export default function Error() {
    return(
        <>
            <h1>OOPS Something went wrong</h1>
            <Link to="/">Go back</Link>
        </>
    )
}