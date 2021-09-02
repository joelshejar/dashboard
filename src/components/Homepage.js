import {Link} from 'react-router-dom'

export default function Homepage(){
    return(
        <>
        <h2>
            Welcome to Homepage!
        </h2>
        <div className='home'>
            <Link className='articlelink' to='/articles'>
                <h4>ARTICLES PAGE</h4>
            </Link>
            <Link className='articlelink' to='/books'>
                <h4>BOOKS PAGE</h4>
            </Link>
            <Link className='articlelink' to='/people'>
                <h4>PEOPLE PAGE</h4>
            </Link>
        </div>
    </>
    )
    
}