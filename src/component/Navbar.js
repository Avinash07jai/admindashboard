import React from 'react';
import './Navbar.css';
import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import Home from './Home';

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className='subnav'>
              <div>
                  <p style={{color:'white', marginLeft:'14px', marginTop:12}}>Admin</p>
              </div>
              <div style={{ display: 'flex', alignItems:'center' }}>
                  <FaSearch className='navIcon' />
                  <FaShoppingCart className='navIcon' />
                  <MdOutlineNotificationsActive className='navIcon' />
                  <div style={{ display: 'flex', alignItems:'center', marginLeft:20 }}>
                      <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfIQWRU19f3hI3qC5Q8Cb7Ez2rMDua9Zuk4w&usqp=CAU' style={{ width: 30, height: 30, marginRight:5, borderRadius:"50%" }} />
                      <p style={{ color: '#1ED97B', marginRight:20 }}>Avinash</p>
                  </div>
              </div>
        </div>
     <Home />
    </div>
  )
}

export default Navbar;
