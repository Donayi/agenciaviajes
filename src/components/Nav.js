import React from 'react'
import { Link } from 'react-router-dom'

const Nav = props => {

    return (
        <nav>
            <Link to='/'><i class="fas fa-atom"></i></Link>
            <div>
                <Link to='/singin'>SingIn</Link>
                <Link to='/singup'>SingUp</Link>

            </div>
        </nav>
    )
}
export default Nav