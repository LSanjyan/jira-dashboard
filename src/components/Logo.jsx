import React from 'react';
import './logo.css';



function Logo() {
    const handleToggleSideBar = () => {
        document.body.classList.toggle('toggle-sidebar')
    }


  return (
    <div className="d-flex align-items-center justify-content-center">
        <a href="/" className="logo d-flex align-items-center">
        <span className="d-none d-lg-block">Dashboard</span>
        </a>
        <i
            className="bi bi-list toggle-sidebar-btn ms-3"
            onClick={handleToggleSideBar}>

        </i>
       
    </div>
   
  )
}

export default Logo;