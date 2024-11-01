import React from 'react';
import'./footer.css';

function Footer() {
  return (
    <footer id='footer' className='footer'>
        <div className='copyright'>
            &copy; Copyright{' '}
            <strong>
                <span>DDS Technology</span>
            </strong>
            . All Rights Reserved
        </div>
        
    </footer>
  )
}

export default Footer