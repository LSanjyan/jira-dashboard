import React from 'react'
import './nav.css';
import NavNotice from './nav/NavNotice';
import NavMessage from './nav/NavMessage';
import NavAvatar from './nav/NavAvatar';

function Nav() {
  return (
    <nav className='header-nav ms-auto'>
        <ul className='d-flex align-items-center'>
         <NavNotice />
         <NavMessage />
         <NavAvatar />   
        </ul>
    </nav>
  )
}

export default Nav