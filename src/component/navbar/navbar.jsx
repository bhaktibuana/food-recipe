import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './navbar.scss'

const Navbar = () => {

    // Setting navbar 
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    // Change navbar color when scrolling
    const [color, setColor] = useState(false)
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setColor (true);
      } else {
        setColor(false);
      }
    };
  
    window.addEventListener('scroll', changeColor);
  

    // Close menu on click 
    const closeMenu = () => setClick(false)

    return (
        <div className={color ? 'header header-bg' : 'header'}>

            <nav className='navbar'>

                <div className='brand'>
                   MealMe
                </div>

                <div className='img-reorder' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/login' onClick={closeMenu}>Login</a>
                    </li>
                    <li className='nav-item'>
                        <a href='/' onClick={closeMenu}>Logout</a>
                    </li>                    
                </ul>
            </nav>
        </div>
    )
}

export default Navbar;