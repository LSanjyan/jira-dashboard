import React from 'react';

function NavMessage() {
  return (
    <li className='nav-item dropdown'>
      <a className='nav-link nav-icon' href="#" data-bs-toggle="dropdown" aria-expanded="false">
        <i className='bi bi-chat-left-text'></i>
        <span className='badge bg-success badge-number'>3</span>
      </a>

      <ul className='dropdown-menu dropdown-menu-end dropdown-menu-arrow messages'>
        <li className='dropdown-header'>
          You have 3 new messages
          <a href="#">
            <span className='badge rounded-pill bg-primary p-2 ms-2'>View all</span>
          </a>
        </li>
        <li><hr className='dropdown-divider' /></li>

        <li className='message-item'>
          <a href='#'>
            <img src='th.jpg' alt='Profile of Bob Smith' className='rounded-circle' />
            <div>
              <h4>Bob Smith</h4>
              <p>Lorem ipsum dolor sit</p>
              <p>4 hrs. ago</p>
            </div>
          </a>
        </li>

        <li className='message-item'>
          <a href='#'>
            <img src='man.jpg' alt='Profile of Kale Nelson' className='rounded-circle' />
            <div>
              <h4>Kale Nelson</h4>
              <p>Lorem ipsum dolor sit amet consectetur</p>
              <p>6 hrs. ago</p>
            </div>
          </a>
        </li>

        <li><hr className='dropdown-divider' /></li>

        <li className='message-item'>
          <a href='#'>
            <img src='woman.jpg' alt='Profile of Ann Walter' className='rounded-circle' />
            <div>
              <h4>Ann Walter</h4>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
              <p>7 hrs. ago</p>
            </div>
          </a>
        </li>

        <li><hr className='dropdown-divider' /></li>
        
        <li className='dropdown-footer'>
          <a href="#">Show all messages</a>
        </li>
      </ul>
    </li>
  );
}

export default NavMessage;
