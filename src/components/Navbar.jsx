import React from 'react'
import '../styles/navbar.scss'

const Navbar = () => {
    return (
        <>
            <header className='hd'>
                <a href="#" className='logo'>INVOXA</a>

                <div className="btn-wrap">
                    <a href="#" className='sign-in'>Sign In</a>
                    <a href="#" className='sign-up'>Sign Up</a>
                </div>

            </header>
        </>
    )
}

export default Navbar
